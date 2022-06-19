import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery} from "gatsby"
import { Logo } from "./Logo.js"
import { YMInitializer } from 'react-yandex-metrika'
import PropTypes from "prop-types"
import SideBar from "./SideBar"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import NavBar from "./NavBar"
import "normalize.css"
import "../styles/global.css"

export default function Layout({ children }) {

  const {site} = useStaticQuery(graphql`
    query getMenuLinks {
        site {
            siteMetadata {
                menuLinks {
                  name
                  link
                }
            }
          }
    }
  `)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScrollChange = () => {
      if (window.scrollY > 1000) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    document.addEventListener('scroll', onScrollChange)
    return () => document.removeEventListener('scroll', onScrollChange)

  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const renderScrollTopButton = () => {
    return (
      <div className={`arrow-top-btn ${!visible && 'hidden'}`} onClick={scrollUp} />
    )
  }

  return (
    <div className="layout">
      <Helmet>
        <meta name="yandex-verification" content="90586fa2622677ce" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap" rel="stylesheet"/> 
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap" rel="stylesheet"/> 
       </Helmet>
      <header>
        <MobileNav />
        <div className="top-header">
          <Logo /> 
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
        
      </header>
      <NavBar links={site.siteMetadata.menuLinks }/>
      <main className="main">
        <SideBar />
        <div className="content">
          {/* content for each page */}
          {children}
        </div>
      </main>
      {renderScrollTopButton()}
      <Footer />
      <YMInitializer accounts={[86876986]} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}