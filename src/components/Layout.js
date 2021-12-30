import React from "react"
import { Helmet } from "react-helmet"
import "normalize.css"
import "../styles/global.css"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
// import imgLogo from "../images/logo.png"
import { YMInitializer } from 'react-yandex-metrika';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet>
        <meta name="yandex-verification" content="90586fa2622677ce" />
       </Helmet>
       <YMInitializer accounts={[86876986]} />
      <header>
        <MobileNav />
        <div className="top-header">
          <Link to="/">
            <StaticImage 
              src="../images/logo.png" alt="Единая доставка воды в Крыму - логотип"
              placeholder="none"
              loading="eager"
              layout="fixed"/>
            {/* <img src={imgLogo} alt="Заказ воды в Симферополе c бесплатной доставкой" /> */}
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
