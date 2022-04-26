import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/productcard.module.css"
import ProductCard from "./ProductCard"

const ItemVoda = () => {
  const data = useStaticQuery(graphql`
    query Voda {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(voda19l)/" }, frontmatter: {outofstock: {ne : true}}}) {
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
          showPrice={false}
        />
      ))}
    </div>
  )
}

export default ItemVoda
