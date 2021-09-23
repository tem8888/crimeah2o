import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/productcard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ItemEquipment = ({}) => {
  const data = useStaticQuery(graphql`
    query Product {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(produkty)/" } }
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
        <div className={styles.productCard} key={product.id}>
          <div className={styles.imgProduct}>
            <GatsbyImage
              image={getImage(product.frontmatter.featuredImage)}
              alt={product.frontmatter.title}
            />
            <div className={styles.price}>{product.frontmatter.price} руб.</div>
          </div>
          <div className={styles.productBody}>
            <h2>{product.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: product.html }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemEquipment
