import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "../components/ProductCard"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Kulery() {

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
    <Layout>
      <Seo 
        title="Кулеры для воды | Единая доставка воды в Крыму" 
        description="Компания «Единая доставка воды в Крыму» проиводит доставку кулеров для воды в Симферополе и симферопольском районе." 
        url="/kulery"/>
      <h1 style={{ textAlign: "center" }}>Кулеры для воды</h1>
      {products.map(product => {
        return (
          <ProductCard 
            key={product.id} 
            product={product} 
            showPrice={true}
            showIcons={true}
          />
        ) 
      })}
    </Layout>
  )
}
