import React from "react"
import imgLogo from '../images/logo.png'

export function Logo() {
  // с GatsbyImage возникает проблема мерцания логотипа при переходе по страницам
  return <img src={imgLogo} alt="Заказ воды в Симферополе c бесплатной доставкой" /> 

}