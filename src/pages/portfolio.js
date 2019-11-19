import React from 'react'
import Layout from "../components/layout"

const Portfolio = () =>  (
    <Layout>
        <div className="hero-sub">
            <div className="hero-sub__text-box">
                    <h1 className="hero-primary">
                    <span className="hero-primary--main">Gatsby Portfolio</span>
                </h1>
            </div>
        </div>

        <div className="section section-portfolio">
            <div className="portfolio-container">
                <h1>This is our Portfolio!</h1>
                <p>Images here and testimonials as well! </p>
            </div>
        </div>
    </Layout>
)

export default Portfolio;