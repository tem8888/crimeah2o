import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/productcard.module.css"
import ProductCard from "./ProductCard"

const ItemEquipment = () => {
  const data = useStaticQuery(graphql`
    query VodaPet {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(vodapet)/" } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          html
          id
          frontmatter {
            order
            price
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 160)
              }
            }
          }
        }
      }
    }
  `)
  const products = data.allMarkdownRemark.nodes
  return (
    <div>
      {products.map(product => (
        <ProductCard 
          product={product}
          styles={styles}
          showPrice={true}
        />
      ))}
    </div>
  )
}

export default ItemEquipment
