import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "../components/ProductCard"

export default function Soputst() {
  const data = useStaticQuery(graphql`
    query Soputst {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(soputst)/" } }
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
    <Layout>
      <Seo 
        title="Сопутствующие товары | Единая доставка воды в Крыму" 
        description="Компания «Единая доставка воды в Крыму» предлагает приобрести сопутствующие товары - бумажные и пластиковые стаканы, 3-секционные тарелки." 
        url="/soputstvuyushhie-tovary"/>
      <h1 style={{ textAlign: "center" }}>Сопутствующие товары</h1>
      {products.map(product => {
        return (
          <ProductCard 
            key={product.id} 
            product={product} 
            showPrice={true}
          />
        ) 
      })}
    </Layout>
  )
}
