import React from "react"
import Styles from "../scss/custom.scss"

import Header from "./headerBanner"

export default ({ children }) => (
  <div>
    <Header></Header>
    {children}
  </div>
)

