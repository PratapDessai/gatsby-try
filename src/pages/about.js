import Head from "../components/head"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>Employed at Inmobi as Front End Developer</p>
      <p>
        <Link to="/contact">contact</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
