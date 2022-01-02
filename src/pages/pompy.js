import React from "react"
import ItemPompy from "../components/ItemPompy"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function pompy() {
  return (
    <Layout>
      <Seo title="Помпы | Единая доставка воды в Крыму" description="Компания «Единая доставка воды в Крыму» проиводит доставку электрических и ручных помп в Симферополе и симферопольском районе."
        keywords="элетрическая помпа, ручная помпа, доставка помп" url="/pompy"/>
      <h1 style={{ textAlign: "center" }}>Помпы</h1>
      <ItemPompy />
    </Layout>
  )
}
