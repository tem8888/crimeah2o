import React from "react"
import ItemProduct from "../components/ItemProduct"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function oborudovanie() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Продукты</title>
        <link rel="canonical" href="https://crimea-h2o.ru/produkty" />
        <meta name="description" content="Доставка продуктов в Крыму"/>
        <meta name="keywords" content="вода, доставка, продукты, симферополь, крым"/>
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Продукты</h1>
      <ItemProduct />
    </Layout>
  )
}
