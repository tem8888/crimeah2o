import React from "react"
import ItemEquipment from "../components/ItemEquipment"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function kulery() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Кулеры для воды</title>
        <link rel="canonical" href="https://crimea-h2o.ru/kulery" />
        <meta name="description" content="Доставка кулеров для воды в Крыму"/>
        <meta name="keywords" content="вода, доставка, раздатчик воды, кулеры для воды, симферополь, крым"/>
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Кулеры для воды</h1>
      <ItemEquipment />
    </Layout>
  )
}
