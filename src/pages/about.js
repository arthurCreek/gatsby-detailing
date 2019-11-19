import React from 'react'
import Layout from "../components/layout"

const About = () =>  (
    <Layout>
        <div className="hero-about">
            <div className="hero-about__text-box">
                    <h1 className="hero-primary">
                    <span className="hero-primary--main">About Our Passion</span>
                </h1>
            </div>
        </div>

        <section className="section about-section">
            <div className="about-container">
                <p className="about-paragraph">Gatsby Detailing was established in 1993 by Arthur Creek, from his love and passion of cars. It continues today in the same tradition and commitment to excellence since day one. This passion has made Gatsby Detailing of Orange County, the finest automobile detailing company for your automobiles needs.</p>
                <p className="about-paragraph">For over 25 years, Arthur has applied his passion, knowledge, and skills to each and every customers automobile that he has given his labor of love. He understands that a customer is not just looking for someone who can detail their car, but someone with the passion to apply that something extra, and to treat each automobile as if were his own. David takes pride in his work and he displays that commitment and skill for each customer, and the testimonials and raves only demonstrate his abilities.</p>
                <p className="about-paragraph">The reality is that detailing a vehicle takes time and knowledge. This system combined with the products we use cannot be found at your local auto parts store or car wash.</p>
                <p className="about-paragraph">Today’s luxury and performance cars can cost as much as a condominium or a small house and yet lose their value quickly if left unloved or mistreated. Even regularly maintained vehicles can lose their value if treated incorrectly. Gatsby Detailing protects and safeguards your investment and with regular scheduled services, we will preserve the quality of your paintwork and vehicles interior. Keeping your vehicle up with our services regularly will result in depreciation that is kept to a minimum when it’s time to sell it or trade it in.</p>
                <p className="about-paragraph">“You're goning to love the way it looks.” - Arthur Creek</p>
            </div>
        </section>
    </Layout>
)

export default About;