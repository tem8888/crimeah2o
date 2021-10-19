import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function errorPage() {
  return (
    <Layout>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <div className="error404">Страница не найдена :'(</div>
    </Layout>
  )
}
