import React from "react"
import ItemProduct from "../components/ItemProduct"
import Layout from "../components/Layout"

export default function oborudovanie() {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Продукты</h1>
      <ItemProduct />
    </Layout>
  )
}
