import React from 'react'
import Layout from "../components/layout"
import Img from 'gatsby-image';

const Portfolio = (props) =>  (
    <Layout>
        <div className="hero-sub">
            <div className="hero-sub__text-box">
                    <h1 className="hero-primary">
                    <span className="hero-primary--main">Gatsby Portfolio</span>
                </h1>
            </div>
        </div>

        <section class="section-cars">
          <div className="portfolio__grid">
              <figure class="car-photo">
                  <Img fluid={props.data.aston.childImageSharp.fluid} className="car-image" alt="Korean bibimbap with egg and vegetables" />
              </figure>
              <figure class="car-photo">
                  <Img fluid={props.data.bmw.childImageSharp.fluid} className="car-image" alt="Simple italian pizza with cherry tomatoes" />
              </figure>
              <figure class="car-photo">
                  <Img fluid={props.data.zanetti.childImageSharp.fluid} className="car-image" alt="Chicken breast steak with vegetables" />
              </figure>

              <figure class="car-photo">
                  <Img fluid={props.data.gtr.childImageSharp.fluid} className="car-image" alt="Autumn pumpkin soup" />
              </figure>
              <figure class="car-photo">
                  <Img fluid={props.data.lambo.childImageSharp.fluid} className="car-image" alt="Paleo beef steak with vegetables" />
              </figure>
              <figure class="car-photo">
                  <Img fluid={props.data.classic.childImageSharp.fluid} className="car-image" alt="Healthy baguette with egg and vegetables" />
              </figure>
              <figure class="car-photo">
                  <Img fluid={props.data.classic_mercedez.childImageSharp.fluid} className="car-image" alt="Burger with cheddar and bacon" />
              </figure>
              <figure class="car-photo">
                  <Img fluid={props.data.lowrider.childImageSharp.fluid} className="car-image" alt="Granola with cherries and strawberries" />
              </figure>
          </div>
        </section>
    </Layout>
)

export default Portfolio;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    aston: file(relativePath: { eq: "aston.jpg" }) {
      ...fluidImage
    }
    bmw: file(relativePath: { eq: "bmw.jpg" }) {
      ...fluidImage
    }
    classic: file(relativePath: { eq: "classic.jpg" }) {
      ...fluidImage
    }
    zanetti: file(relativePath: { eq: "zanetti.jpg" }) {
      ...fluidImage
    }
    classic_mercedez: file(relativePath: { eq: "classic_mercedez.jpg" }) {
      ...fluidImage
    }
    lambo: file(relativePath: { eq: "lambo.jpg" }) {
      ...fluidImage
    }
    lowrider: file(relativePath: { eq: "lowrider.jpg" }) {
      ...fluidImage
    }
    gtr: file(relativePath: { eq: "gtr.jpg" }) {
      ...fluidImage
    }
  }
`