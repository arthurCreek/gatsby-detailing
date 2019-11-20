import React from 'react'
import Layout from "../components/layout"

const ContactUs = () =>  (
    <Layout>
        <div className="hero-sub--contact">
            <div className="hero-sub__text-box">
                    <h1 className="hero-primary">
                    <span className="hero-primary--main">Contact Us</span>
                </h1>
            </div>
        </div>

        <section className="index__call">
            <div className="index__call-container">
                <div className="index__call-card">
                    <div className="index__call-book">
                        <h2>Book with us today</h2>
                        <div className="index__call-info">
                        <div className="index__call-info--call-location">
                            <div className="index__call-info--item">
                            <h3>Location</h3>
                            <p>123 Alphabet</p>
                            <p>City, State Zip</p>
                            </div>
                            <div className="index__call-info--item">
                            <h3>Call us</h3>
                            <p>555-555-555</p>
                            </div>
                        </div>

                        <div className="index__call-info--hours">
                            <div className="index__call-info--item">
                            <h3>Hours</h3>
                            <p>Monday-Friday: 8am-5pm</p>
                            <p>Saturday: 8am-7pm</p>
                            <p>Sunday: 9am-2pm</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default ContactUs;