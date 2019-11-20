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


    <section className="section index__finest">
      <div className="index__finest-container">
        <div className="index__finest-header">
          <h2>The Finest Quality from Gatsby</h2>
        </div>
        <div className="index__finest-body">
          <div className="index__finest-body--text">
            <div className="index__finest-body--text-item">
              <h3>You're going to fall in love again</h3>
              <p>lasdasd sdn as d hjs j as dja js dajs djha sdj asdj ash</p>
            </div>
            <div className="index__finest-body--text-item">
              <h3>Keep your prized possesion healthy</h3>
              <p>adh asjc sachsachjahj chja sjhc hja cjha sj cacs</p>
            </div>
          </div>
          <div className="index__finest-body--images">
            <p>Image 1</p>
            <p>Image 2</p>
            <p>Image 3</p>
          </div>
        </div>
        <div className="index__finest-footer">
          <a href="#">Learn More About Us</a>
        </div>
      </div>
    </section>


    <section className="section index__popular">
      <div className="index__popular-container">
        <div className="index__popular-header">
          <h2>Most Popular Services</h2>
        </div>  
        <div className="index__popular-body">
          <p>Card 1</p>
          <p>Card 2</p>
          <p>Card 3</p>
        </div>
        <div className="index__popular-footer">
          <p>Button to: Discover All Services</p>
        </div>
      </div>
    </section>


    <section className="section index__best">
      <div className="index__best-container">
        <div className="index__best-header">
          <h2>Best in the Business</h2>
        </div>

        <div className="index__best-body">
          <div className="index__best-body--image">
            <p>Picture goes here</p>
          </div>
          <div className="index__best-body--info">
            <div className="index__best-body--info-row">
              <p className="index__best-body--p">Icon #1</p>
              <div className="index__best-body--info-row-text">
                <h3>Perfect Quality</h3>
                <p>asdasdas d asdasd asd </p>
              </div>
            </div>
            <div className="index__best-body--info-row">
              <p className="index__best-body--p">Icon #2</p>
              <div className="index__best-body--info-row-text">
                <h3>Best Products Used</h3>
                <p>asdasdas d asdasd asd </p>
              </div>
            </div>
            <div className="index__best-body--info-row">
              <p className="index__best-body--p">Icon #3</p>
              <div className="index__best-body--info-row-text">
                <h3>Professionals with a Passion</h3>
                <p>asdasdas d asdasd asd </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="section index__portfolio">
      <div className="index__portfolio-container">
        <h2>Portfolio</h2>
        <div className="index__portfolio-gallery">
          <p>Image gallery here</p>
        </div>
        <a href="#">See More</a>
      </div>
    </section>

    <section className="section index__customers">
      <div className="index__customers-container">
        <h2 className="index__customers-header">
          What customers are saying
        </h2>
        <div className="index__customers-body">
          <div className="index__customers-body-item">
            <p>Picture here 1</p>
            <p>ijansdj ka ns   sdhj a  s</p>
          </div>
          <div className="index__customers-body-item">
            <p>Picture here 2</p>
            <p>ijansdj ka ns   sdhj a  s</p>
          </div>
          <div className="index__customers-body-item">
            <p>Picture here 3</p>
            <p>ijansdj ka ns   sdhj a  s</p>
          </div>
        </div>
      </div>
    </section>


    <section className="index__call">
      <div className="index__call-container">
        <div className="index__call-card">
          <div className="index__call-book">
            <h2>Book with us today</h2>
            <div className="index__call-info">
              <div className="index__call-info--item">
                <h3>Call us</h3>
                <p>555-555-555</p>
              </div>
              <div className="index__call-info--item">
                <h3>Location</h3>
                <p>123 Alphabet</p>
                <p>City, State Zip</p>
              </div>
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
    </section>



  </Layout>
)

export default IndexPage
