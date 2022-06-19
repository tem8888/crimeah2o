import React from "react"
import imgLogo from '../images/logo.png'
import { Link } from "gatsby"

export function Logo() {
  // с GatsbyImage возникает проблема мерцания логотипа при переходе по страницам
  return (
    <Link to='/'>
      <img src={imgLogo} alt="Заказ воды в Симферополе c бесплатной доставкой" /> 
    </Link>
  ) 

}