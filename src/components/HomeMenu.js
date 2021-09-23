import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/homemenu.module.css"

export default function HomeMenu() {
  return (
    <div className={styles.homeMenu}>
      <Link to="/voda-19-l">
        <img src="/19lw.jpg" alt="Вода 19л" />
        Вода 19 литров
      </Link>
      <Link to="/voda-v-pet">
        <img src="/pet2.jpg" alt="Вода в ПЭТ" />
        Вода в ПЭТ
      </Link>
      <Link to="/oborudovanie">
        <img src="/oborudov.jpg" alt="Оборудование" />
        Оборудование
      </Link>
      <Link to="/soputstvuyushhie-tovary">
        <img src="/tea.jpg" alt="Сопутствующие товары" />
        Сопутствующие товары
      </Link>
      <Link to="/produkty">
        <img src="/product.jpg" alt="Продукты" />
        Продукты
      </Link>
    </div>
  )
}
