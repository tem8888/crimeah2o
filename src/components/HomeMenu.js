import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/homemenu.module.css"
import img19l from "../images/19lw.jpg"
import imgPet from "../images/pet2.jpg"
import imgOborud from "../images/oborudov.jpg"
import imgTea from "../images/tea.jpg"
import imgProduct from "../images/product.jpg"

export default function HomeMenu() {
  return (
    <div className={styles.homeMenu}>
      <Link to="/voda-19-l">
        <img src={img19l} alt="Вода 19л" />
        Вода 19 литров
      </Link>
      <Link to="/voda-v-pet">
        <img src={imgPet} alt="Вода в ПЭТ" />
        Вода в ПЭТ
      </Link>
      <Link to="/oborudovanie">
        <img src={imgOborud} alt="Оборудование" />
        Оборудование
      </Link>
      <Link to="/soputstvuyushhie-tovary">
        <img src={imgTea} alt="Сопутствующие товары" />
        Сопутствующие товары
      </Link>
      <Link to="/produkty">
        <img src={imgProduct} alt="Продукты" />
        Продукты
      </Link>
    </div>
  )
}
