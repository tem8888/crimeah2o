import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/navbar.module.css"

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query titleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <nav className={styles.links}>
      <Link to="/">Главная</Link>

      <Link to="/tehobsluzhivanie-i-remont">Техобслуживание и ремонт</Link>

      <Link to="/gruzoperevozki">Грузоперевозки</Link>

      <Link to="/polezno-znat">Полезно знать</Link>

      <Link to="/dostavka-i-oplata">Доставка и оплата</Link>

      <Link to="/kontakty">Контакты</Link>

      <Link to="/o-kompanii">О компании</Link>
    </nav>
  )
}
