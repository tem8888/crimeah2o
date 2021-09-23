import React from "react"
import * as styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://librasimferopol.ru/?76873">
        Единая доставка воды в Крыму - Либра.онлайн
      </a>
      <br />
      &copy; {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
