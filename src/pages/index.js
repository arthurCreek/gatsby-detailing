import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from 'gatsby-image';
import best_icon_1 from '../images/medal.svg';
import best_icon_2 from '../images/disinfectant.svg';
import best_icon_3 from '../images/clean-car.svg';

const IndexPage = (props) => (
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


    <section className="section-boxes index__finest">
      <div className="index__finest-container">
        <div className="index__finest-header">
          <h2>The Finest Quality from Gatsby</h2>
        </div>
        <div className="index__finest-body">
          <div className="index__finest-body--text">
            <div className="index__finest-body--text-item">
              <h3>You're going to fall in love again</h3>
              <p>We help bring life and shine back to your prized possesion</p>
            </div>
            <div className="index__finest-body--text-item">
              <h3>Keep your prized possesion healthy</h3>
              <p>Protect your exterior from acid rain and interior from dirt and stains</p>
            </div>
          </div>
          <div className="index__finest-body--images">
              <Img  alt="Photo 1"
                    className="index__finest-body--images-photo index__finest-body--images-photo-p1"
                    fluid={props.data.wash_1.childImageSharp.fluid} />
              <Img  alt="Photo 2"
                    className="index__finest-body--images-photo index__finest-body--images-photo-p2"
                    fluid={props.data.wash_2.childImageSharp.fluid} />
              <Img  alt="Photo 3"
                    className="index__finest-body--images-photo index__finest-body--images-photo-p3"
                    fluid={props.data.wash_3.childImageSharp.fluid} />
          </div>
        </div>
        <div className="index__finest-footer">
          <a className="btn-ghost" href="#">Learn More About Us</a>
        </div>
      </div>
    </section>


    <section className="section-boxes index__popular">
      <div className="index__popular-container">
        <div className="index__popular-header">
          <h2>Most Popular Services</h2>
        </div>  
        <div className="index__popular-body">
          <div className="feature-box feature-box--services">
            <h2>Level 2 Detail</h2>
            <h3>Exterior and Interior</h3>
            <p>In addition to LEVEL 1</p>
            <ul>
                <li>Thorough Interior Vacuum</li>
                <li>Thorough Wipe Down</li>
            </ul>
            <p>Price: $120-140</p>
          </div>
          <div className="feature-box feature-box--services feature-box--services-best">
            <h2>Level 3 Detail</h2>
            <h3>Detail with Added Protection</h3>
            <p>In addition to LEVEL 2</p>
            <ul id="feature-box__best-box">
                <li>Ceramic Spray Sealant</li>
            </ul>
            <p>Price: $160-200</p>
            <p id="popular-p">MOST POPULAR</p>
          </div>
          <div className="feature-box feature-box--services">
            <h2>Level 4 Detail</h2>
            <h3>Light Clay Bar</h3>
            <p>In addition to LEVEL 3</p>
            <ul>
                <li>Clay Bar treatment</li>
            </ul>
            <p>Price: $240-280</p>
          </div>
        </div>
        <div className="index__popular-footer">
          <a className="btn-ghost--popular" href="#">Discover Our Services</a>
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
            <Img  alt="Photo 1"
                  className="index__best-body--image-photo"
                  fluid={props.data.zanetti.childImageSharp.fluid} />
          </div>
          <div className="index__best-body--info">
            <div className="index__best-body--info-row">
              <img src={best_icon_1} alt="medal icon" className="index__best-body--icon"/>
              <div className="index__best-body--info-row-text">
                <h3>Perfect Quality</h3>
                <p>Quality you expect from the best</p>
              </div>
            </div>
            <div className="index__best-body--info-row">
              <img src={best_icon_2} alt="disinfectant icon" className="index__best-body--icon"/>
              <div className="index__best-body--info-row-text">
                <h3>Best Products Used</h3>
                <p>All products are top notch for best results</p>
              </div>
            </div>
            <div className="index__best-body--info-row">
              <img src={best_icon_3} alt="disinfectant icon" className="index__best-body--icon"/>
              <div className="index__best-body--info-row-text">
                <h3>Professionals with a Passion</h3>
                <p>We take care of your car like it's our own</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="section-boxes index__customers">
      <div className="index__customers-container">
        <h2 className="index__customers-header">
          What customers are saying
        </h2>
        <div className="index__customers-body">
          <div className="index__customers-body-item feature-box">
            <blockquote>
              Based on the reviews from others, I really wanted to take my vehicle to Gatsby.  From first call to the finished result was flawless,
              they got my car in tip top shape in no time. They were very helpful in explaining the different 
              options and flexible in dealing with my schedule.
              <cite><Img fluid={props.data.customer_1.childImageSharp.fluid} alt="Customer 1 photo"  className="index__customer-body--photo"/>Michael lewis</cite>
            </blockquote>
          </div>
          <div className="index__customers-body-item feature-box">
            <blockquote>
              Arthur and his team at Gatsby are the best of the best. I wish I would've took before and after pictures so I could've post how 
              amazing their work is. Arthur and his team never disappoint.
              <cite><Img fluid={props.data.customer_2.childImageSharp.fluid} alt="Customer 2 photo"  className="index__customer-body--photo"/>Sarah Duncan</cite>
            </blockquote>
          </div>
          <div className="index__customers-body-item feature-box">
            <blockquote>
              I had the privilege of working with Arthur in trying to remove a lingering odor in my vehicle. He was very quick to respond and 
              fit me into his schedule. He was very professional and was able to successfully remove the odor from the car without issue.  
              I wouldn't hesitate to reach out and work with the Gatsby team again.
              <cite><Img fluid={props.data.customer_3.childImageSharp.fluid} alt="Customer 3 photo" className="index__customer-body--photo"/>Juan Gomez</cite>
            </blockquote>
          </div>
        </div>
        <div className="index__portfolio-footer">
          <a className="btn-ghost--portfolio" href="#">See Our Portfolio</a>
        </div>
      </div>
    </section>


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

export default IndexPage

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
    wash_1: file(relativePath: { eq: "wash_1.jpg" }) {
      ...fluidImage
    }
    wash_2: file(relativePath: { eq: "wash_2.jpg" }) {
      ...fluidImage
    }
    wash_3: file(relativePath: { eq: "wash_3.jpg" }) {
      ...fluidImage
    }
    zanetti: file(relativePath: { eq: "zanetti.jpg" }) {
      ...fluidImage
    }
    customer_1: file(relativePath: { eq: "customer-1.jpg" }) {
      ...fluidImage
    }
    customer_2: file(relativePath: { eq: "customer-2.jpg" }) {
      ...fluidImage
    }
    customer_3: file(relativePath: { eq: "customer-3.jpg" }) {
      ...fluidImage
    }
  }
`