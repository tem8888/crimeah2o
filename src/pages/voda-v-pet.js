import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function errorPage() {
  return (
    <Layout>
      <Helmet>
      <meta charSet="utf-8" />
        <title>Вода в ПЭТ</title>
        <meta name="description" content="Доставка воды в ПЭТ в Крыму"/>
      </Helmet>
      <div className="error404">Страница в разработке.</div>
    </Layout>
  )
}
