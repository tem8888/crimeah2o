import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function ProductCard({
    styles,
    product,
    showPrice,
}) {
  return (
    <div className={styles.productCard} key={product.id}>
        <div className={styles.imgProduct}>
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