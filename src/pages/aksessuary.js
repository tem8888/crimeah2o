import React from "react"
import ItemAksessuar from "../components/ItemAksessuar"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function errorPage() {
  return (
    <Layout>
      <Seo title="Аксессуары" description="Предлагаем своим клиентам бесплатную доставку аксессуаров (подставки, клапаны) для воды и других товаров по
        Симферополю."/>
      <h1 style={{ textAlign: "center" }}>Аксессуары</h1>
      <ItemAksessuar />
    </Layout>
  )
}
