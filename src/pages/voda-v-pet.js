import React from "react"
import Layout from "../components/Layout"
import ItemVodaPet from "../components/ItemVodaPet"
import Seo from "../components/Seo"

export default function errorPage() {
  return (
    <Layout>
      <Seo title="Вода в ПЭТ" description="«Единая доставка воды в Крыму» предлагает питьевую воду в бутылках ПЭТ объемом 0.5 литра, 1 литр, 1.5 литра." url="/voda-v-pet"/>
      <h1 style={{ textAlign: "center" }}>Вода в ПЭТ</h1>
      <ItemVodaPet />
    </Layout>
  )
}
