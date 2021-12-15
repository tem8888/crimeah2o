import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import ItemVodaPet from "../components/ItemVodaPet"

export default function errorPage() {
  return (
    <Layout>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Вода в ПЭТ</title>
        <meta name="description" content="Доставка воды в ПЭТ в Крыму"/>
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Вода в ПЭТ</h1>
      <ItemVodaPet />
    </Layout>
  )
}
