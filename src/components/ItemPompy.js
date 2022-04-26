import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "./ProductCard"
import * as styles from "../styles/productcard.module.css"

const ItemEquipment = () => {
  const data = useStaticQuery(graphql`
    query Pompy {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(pompy)/" } }
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
