import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import * as styles from "../styles/productcard.module.css" 
import coldIcon from '../images/icons/cold.png'
import hotIcon from '../images/icons/hot.png'

function ProductCard({ product, showPrice, showIcons }) {

  const renderIcons = () => {
    if (!showIcons)
      return null
    const icons = []
    if (product.frontmatter.cooling === 'yes') {
      icons.push(
        <span key={1} className={styles.coldIcon}>
          <img src={coldIcon} alt="Охлаждение" />
        </span>
      )
    }
    if (product.frontmatter.warming === 'yes') {
      icons.push(
        <span key={2} className={styles.hotIcon}>
          <img src={hotIcon} alt="Нагрев" />
        </span>
      )
    }
    return icons
  }

  return (
    <div className={styles.productCard}>
        <div className={styles.imgProduct}>
        {renderIcons()}
        <GatsbyImage
            image={getImage(product.frontmatter.featuredImage)}
            alt={product.frontmatter.title}
        />
        {showPrice && <div className={styles.price}>{product.frontmatter.price} руб.</div>}
        </div>
        <div className={styles.productBody}>
        <h2>{product.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: product.html }}></div>
        </div>
    </div>
  )
}

export default ProductCard

ProductCard.propTypes = {
  product: PropTypes.object,
  showPrice: PropTypes.bool,
  temperatureIcons: PropTypes.bool
}