import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import ItemAksessuar from "../components/ItemAksessuar"


export default function errorPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Аксессуары</title>
        <link rel="canonical" href="https://crimea-h2o.ru/aksessuary" />
        <meta name="description" content="Доставка аксессуаров для воды в Крыму"/>
        <meta name="keywords" content="вода, доставка, аксессуары, симферополь, крым"/>
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Аксессуары</h1>
      <ItemAksessuar />
    </Layout>
  )
}
