import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "../components/ProductCard"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Pompy() {
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
    <Layout>
      <Seo title="Помпы | Единая доставка воды в Крыму" description="Компания «Единая доставка воды в Крыму» проиводит доставку электрических и ручных помп в Симферополе и симферопольском районе."
        keywords="элетрическая помпа, ручная помпа, доставка помп" url="/pompy"/>
      <h1 style={{ textAlign: "center" }}>Помпы</h1>
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
