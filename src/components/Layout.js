import React from "react"
import NavBar from "../components/NavBar"
import "normalize.css"
import "../styles/global.css"
import SideBar from "../components/SideBar"
import { Link } from "gatsby"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import imgLogo from "../images/logo.png"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <MobileNav />
        <div className="top-header">
          <Link to="/">
            <img src={imgLogo} alt="Логотип" />
          </Link>
          <div className="info">
            <span className="info__header">Заказ воды:</span>
            <br />
            г. Симферополь
            <br />
            <span className="info__phone">+7(978) 869-0005</span>
            <br />
            <span className="info__phone">+7(978) 869-0009</span>
            <br />
            пн-вс 08:00 - 18:00 <br />
          </div>
        </div>
        <NavBar />
      </header>

      <main className="main">
        <SideBar />
        <div className="content">
          {/* content for each page */}
          {children}
        </div>
      </main>

      <Footer />
    </div>
  )
}
