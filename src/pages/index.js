import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="hero__text-box">
        <h1 className="hero-primary">
          <span className="hero-primary--main">Gatsby Detailing</span>
          <span className="hero-primary--sub">We love your car as much as you do</span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">Discover Our Services</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
