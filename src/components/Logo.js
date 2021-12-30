import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function Logo() {
    return <StaticImage 
        src="../images/logo.png" 
        alt="Единая доставка воды в Крыму - логотип"
        loading="eager"
    />
  }