import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/productcard.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import coldIcon from '../images/icons/cold.png'
import hotIcon from '../images/icons/hot.png'

const ItemEquipment = () => {
  const data = useStaticQuery(graphql`
    query Kulery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(kulery)/" } }
        sort: { fields: frontmatter___order }
      ) {
        nodes {
          html
          id
          frontmatter {
            order
            price
            title
            cooling
            warming
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
            {product.frontmatter.cooling === 'yes' ?
            <span className={styles.coldIcon}>
              <img src={coldIcon} alt="Охлаждение" />
            </span>
            :
            null}
            {product.frontmatter.warming === 'yes' ?
            <span className={styles.hotIcon}>
              <img src={hotIcon} alt="Нагрев" />
            </span>
            :
            null}
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
