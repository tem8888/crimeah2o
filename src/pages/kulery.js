import React from "react"
import ItemEquipment from "../components/ItemEquipment"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function kulery() {
  return (
    <Layout>
      <Seo title="Кулеры для воды" description="Компания «Единая доставка воды в Крыму» проиводит доставку кулеров для воды в Симферополе и симферопольском районе." url="/kulery"/>
      <h1 style={{ textAlign: "center" }}>Кулеры для воды</h1>
      <ItemEquipment />
    </Layout>
  )
}
