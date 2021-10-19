import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

export default function kontakty() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Контакты</title>
        <link rel="canonical" href="https://crimea-h2o.ru/kontakty" />
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Контакты</h1>
      <p>
        {" "}
        ИП Новик И.С.
        <br />
        Адрес : 297523, Республика Крым, Симферопольский район, с.Донское,
        ул.Виноградная 56, кв14
        <br />
        Тел. +7(978) 1151578, +7(978)0553090
        <br />
        ИНН 910903412101
        <br />
        ОГРН 317910200050812
        <br />
        Р/сч 40802810640080001818
        <br />
        К/сч 30101810335100000607
        <br />
        БИК 043510607
        <br />
        РНКБ БАНК (ПАО) Г. СИМФЕРОПОЛЬ
        <br />
      </p>

      <h3>Режим работы</h3>
      <p>
        <b>Прием заявок:</b>
        <br />• С понедельника по воскресенье с 08:00 до 18:00
      </p>
    </Layout>
  )
}
