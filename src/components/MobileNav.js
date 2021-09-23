import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/mobilenav.module.css"

function MobileNav() {
  return (
    <>
      <div className={styles.mobileToggle}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <div className={styles.mobileNav}>
          <Link to="/">Главная</Link>
          <Link to="/voda-19-l">Вода 19 литров</Link>
          <Link to="/oborudovanie">Оборудование</Link>
          <Link to="/produkty">Продукты</Link>
          <Link to="/tehobsluzhivanie-i-remont">Техобслуживание и ремонт</Link>
          <Link to="/dostavka-i-oplata">Доставка и оплата</Link>
          <Link to="/kontakty">Контакты</Link>
        </div>
      </div>
    </>
  )
}

export default MobileNav
