import "../styles/index.scss"

import Head from "../components/head"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2> I am Pratap, Front End developer living in Bangalore, India</h2>
      <p>
        Need a developer? <a href="/contact">Contact</a>
      </p>
      <p>
        Need a developer<Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
