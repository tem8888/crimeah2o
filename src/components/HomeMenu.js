import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/homemenu.module.css"

export default function HomeMenu() {
  return (
    <div className={styles.homeMenu}>
      <Link to="/voda-19-l">
        <StaticImage 
            src="../images/19lw.jpg" alt="Вода 19л"
            placeholder="none"
            loading="eager"
            width={160}
            height={160}
            className={styles.homeMenuImage}/>
        Вода 19 литров
      </Link>
      <Link to="/voda-v-pet">
        <StaticImage 
            src="../images/pet2.jpg" alt="Вода в ПЭТ"
            placeholder="none"
            loading="eager"
            width={160}
            height={160}
            className={styles.homeMenuImage}/>
        Вода в ПЭТ
      </Link>
      <Link to="/kulery">
          <StaticImage 
            src='../images/kuller_main.jpg' alt="Кулеры для воды"
            placeholder="none"
            loading="eager"
            width={160}
            height={160}
            className={styles.homeMenuImage}/>
        Кулеры для воды
        </Link>
      <Link to="/soputstvuyushhie-tovary">
        <StaticImage 
            src="../images/posuda.jpg" alt="Сопутствующие товары"
            placeholder="none"
            loading="eager"
            width={160}
            height={160}
            className={styles.homeMenuImage}/>
        Сопутствующие товары
      </Link>
      <Link to="/pompy">
        <StaticImage 
            src="../images/pomp.jpg" alt="Помпы"
            placeholder="none"
            loading="eager"
            width={160}
            height={160}
            className={styles.homeMenuImage}/>
        Помпы
      </Link>
    </div>
  )
}
