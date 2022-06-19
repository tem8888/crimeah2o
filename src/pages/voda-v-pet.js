import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import ProductCard from "../components/ProductCard"
import Seo from "../components/Seo"

export default function VodaVPet() {
  const data = useStaticQuery(graphql`
    query VodaPet {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(vodapet)/" } }
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
      <Seo title="Вода в ПЭТ | Единая доставка воды в Крыму" description="«Единая доставка воды в Крыму» предлагает питьевую воду в бутылках ПЭТ объемом 0.5 литра, 1 литр, 1.5 литра." url="/voda-v-pet"/>
      <h1 style={{ textAlign: "center" }}>Вода в ПЭТ</h1>
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
