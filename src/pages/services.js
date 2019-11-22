import React from 'react'
import Layout from "../components/layout"

const Services = () =>  (
    <Layout>
        <div className="hero-sub">
            <div className="hero-sub__text-box">
                <h1 className="hero-primary">
                    <span className="hero-primary--main">Detailing Services</span>
                </h1>
            </div>
        </div>

        <section className="services__section">
            <div className="services__container">
                <div className="services__header-text">
                    <h1>Quality Services</h1>
                    <p>Find our services below, contact us for a free consultation!</p>
                </div>
                <div className="services__grid">
                    <div className="services__grid-item feature-box feature-box--service-page">
                        <h2>Level 1 Detail</h2>
                        <h3>Thorough Exterior Wash</h3>
                        <ul>
                            <li>Exterior wash</li>
                            <li>Dry with 450GSM towels</li>
                            <li>Thorough blow dry</li>
                            <li>Wheels cleaned</li>
                            <li>Tire Dressing with Meguiars</li>
                        </ul>
                        <p>Price: $60-80</p>
                    </div>
                    <div className="services__grid-item feature-box feature-box--service-page">
                        <h2>Level 2 Detail</h2>
                        <h3>Exterior and Interior</h3>
                        <p>In addition to LEVEL 1</p>
                        <ul>
                            <li>Thorough Interior Vacuum</li>
                            <li>Thorough Wipe Down</li>
                        </ul>
                        <p>Price: $120-140</p>
                    </div>
                    <div className="services__grid-item feature-box feature-box--service-page">
                        <h2>Level 3 Detail</h2>
                        <h3>Detail with Added Protection</h3>
                        <p>In addition to LEVEL 2</p>
                        <ul>
                            <li>Ceramic Spray Sealant</li>
                        </ul>
                        <p>Price: $160-200</p>
                        <p id="services-p">MOST POPULAR</p>
                    </div>
                    <div className="services__grid-item feature-box feature-box--service-page">
                        <h2>Level 4 Detail</h2>
                        <h3>Light Clay Bar</h3>
                        <p>In addition to LEVEL 3</p>
                        <ul>
                            <li>Clay Bar treatment</li>
                        </ul>
                        <p>Price: $240-280</p>
                    </div>
                    <div className="services__grid-item feature-box feature-box--service-page">
                        <h2>Level 5 Detail</h2>
                        <h3>Decontamination with shine and wheel protection</h3>
                        <p>In addition to LEVEL 4</p>
                        <ul>
                            <li>Heavier gunk removal treatment</li>
                            <li>Wheels coated with ceramic spray sealant</li>
                        </ul>
                        <p>Price: $340-400</p>
                    </div>
                    <div className="services__grid-item feature-box feature-box--service-page">
                        <h2>Level 6 Detail</h2>
                        <h3>Extra shine</h3>
                        <p>In addition to LEVEL 5</p>
                        <ul>
                            <li>Extra layer of sealant</li>
                        </ul>
                        <p>Price: $500-540</p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default Services;