import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "../components/ProductCard"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Aksessuary() {

  const data = useStaticQuery(graphql`
    query Aksessuar {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(aksessuary)/" } }
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
        title="Аксессуары | Единая доставка воды в Крыму" 
        description="Предлагаем своим клиентам бесплатную доставку аксессуаров (подставки, клапаны) для воды и других товаров по
        Симферополю." 
        url="/aksessuary"
      />
      <h1 style={{ textAlign: "center" }}>Аксессуары</h1>
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
