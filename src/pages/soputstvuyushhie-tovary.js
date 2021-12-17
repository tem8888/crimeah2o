import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ItemSoputst from "../components/ItemSoputst"

export default function errorPage() {
  return (
    <Layout>
      <Seo title="Сопутствующие товары" description="Компания «Единая доставка воды в Крыму» предлагает приобрести сопутствующие товары - бумажные и пластиковые стаканы, 3-секционные тарелки."/>
      <h1 style={{ textAlign: "center" }}>Сопутствующие товары</h1>
      <ItemSoputst />
    </Layout>
  )
}
