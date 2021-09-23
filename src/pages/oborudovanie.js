import React from "react"
import ItemEquipment from "../components/ItemEquipment"
import Layout from "../components/Layout"

export default function oborudovanie() {
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Оборудование</h1>
      <ItemEquipment />
    </Layout>
  )
}
