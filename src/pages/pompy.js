import React from "react"
import ItemPompy from "../components/ItemPompy"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function pompy() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Помпы</title>
        <link rel="canonical" href="https://crimea-h2o.ru/produkty" />
        <meta name="description" content="Компания «Единая доставка воды в Крыму» проиводит доставку помп в Крыму"/>
        <meta name="keywords" content="вода, доставка, помпы, симферополь"/>
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Помпы</h1>
      <ItemPompy />
    </Layout>
  )
}
