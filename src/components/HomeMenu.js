import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/homemenu.module.css"
import img19l from "../images/19lw.jpg"
import imgPet from "../images/pet2.jpg"
import imgOborud from "../images/aquawell-1.jpg"
import imgTea from "../images/tea.jpg"
import imgPomp from "../images/pomp.jpg"

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
      <Link to="/kulery">
        <img src={imgOborud} alt="Кулеры для воды" />
        Кулеры для воды
      </Link>
      <Link to="/soputstvuyushhie-tovary">
        <img src={imgTea} alt="Сопутствующие товары" />
        Сопутствующие товары
      </Link>
      <Link to="/pompy">
        <img src={imgPomp} alt="Помпы" />
        Помпы
      </Link>
    </div>
  )
}
