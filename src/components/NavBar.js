import React from "react"
import { Link} from "gatsby"
import * as styles from "../styles/navbar.module.css"

export default function NavBar({ links }) {
  return (
    <nav className={styles.links}>
      {links.map(menu => {
        return (
          <Link key={menu.name} to={menu.link}>{menu.name}</Link>
        )
      })}
    </nav>
  )
}
