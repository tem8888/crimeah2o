import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import imgLogo from '../images/logo.png'

export function Logo() {

    // return <StaticImage 
    //     src='../images/logo.png'
    //     alt="Единая доставка воды в Крыму - логотип"
    //     placeholder="blurred"
    // />

    return  <img src={imgLogo} alt="Заказ воды в Симферополе c бесплатной доставкой" /> 

  }