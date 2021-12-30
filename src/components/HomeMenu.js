import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/homemenu.module.css"
// import img19l from "../images/19lw.jpg"
// import imgPet from "../images/pet2.jpg"
// import imgOborud from "../images/kuller_main.jpg"
// import imgPosuda from "../images/posuda.jpg"
// import imgPomp from "../images/pomp.jpg"

export default function HomeMenu() {
  return (
    <div className={styles.homeMenu}>
      <Link to="/voda-19-l">
      <StaticImage 
          src="../images/19lw.jpg" alt="Вода 19л"
          placeholder="none"
          loading="eager"
          layout="fixed"
          width={160}
          height={160}/>
        {/* <img src={img19l} alt="Вода 19л" /> */}
        <h2>Вода 19 литров</h2>
      </Link>
      <Link to="/voda-v-pet">
      <StaticImage 
          src="../images/pet2.jpg" alt="Вода в ПЭТ"
          placeholder="none"
          loading="eager"
          layout="fixed"
          width={160}
          height={160}/>
        {/* <img src={imgPet} alt="Вода в ПЭТ" /> */}
        <h2>Вода в ПЭТ</h2>
      </Link>
      <Link to="/kulery">
        <StaticImage 
          src='../images/kuller_main.jpg' alt="Кулеры для воды"
          placeholder="none"
          loading="eager"
          placeholder="blurred"
          layout="fixed"
          width={160}
          height={160}/>
        {/* <img src={imgOborud} alt="Кулеры для воды" /> */}
        <h2>Кулеры для воды</h2>
      </Link>
      <Link to="/soputstvuyushhie-tovary">
      <StaticImage 
          src="../images/posuda.jpg" alt="Сопутствующие товары"
          placeholder="none"
          loading="eager"
          placeholder="blurred"
          layout="fixed"
          width={160}
          height={160}/>
        {/* <img src={imgPosuda} alt="Сопутствующие товары" /> */}
        <h2>Сопутствующие товары</h2>
      </Link>
      <Link to="/pompy">
      <StaticImage 
          src="../images/pomp.jpg" alt="Помпы"
          placeholder="none"
          loading="eager"
          placeholder="blurred"
          layout="fixed"
          width={160}
          height={160}/>
        {/* <img src={imgPomp} alt="Помпы" /> */}
        <h2>Помпы</h2>
      </Link>
    </div>
  )
}
