import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function errorPage() {
  return (
    <Layout>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Сопутствующие товары</title>
        <meta name="description" content="Компания «Единая доставка воды в Крыму» предлагает приобрести сопутствующие товары."/>
      </Helmet>
      <div className="error404">Страница в разработке.</div>
    </Layout>
  )
}
