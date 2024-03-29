import Footer from "./footer"
import Header from "./header"
import React from "react"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
