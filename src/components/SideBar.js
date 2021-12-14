import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/sidebar.module.css"
import imgLibraButton from "../images/librabutton.png"
import imgPromo from "../images/pompa-promo.jpg"

export default function SideBar() {
  return (
    <aside className={styles.aside}>
      <nav>
        <Link to="/voda-19-l">Вода 19 л</Link>
        <Link to="/voda-v-pet">Вода в ПЭТ</Link>
        <Link to="/kulery">Кулеры для воды</Link>
        <Link to="/pompy">Помпы</Link>
        <Link to="/filtry-dlya-vody">Фильтры для воды</Link>
      </nav>
      <span style={{ margin: "20px 0px" }}>
        <a href="https://librasimferopol.ru/?s_cat=229">
          <img src={imgLibraButton} alt="Либра.онлайн" />
        </a>
      </span>
      <img src={imgPromo} alt="Акция - Помпа 300р" width="250" />
    </aside>
  )
}
