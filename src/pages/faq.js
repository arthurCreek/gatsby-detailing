import React from 'react'
import Layout from "../components/layout"

const FAQ = () =>  (
    <Layout>
        <div className="hero-sub">
            <div className="hero-sub__text-box">
                    <h1 className="hero-primary">
                    <span className="hero-primary--main">FAQs</span>
                </h1>
            </div>
        </div>

        <section className="section-faq">
            <div className="faq__container">
                <div className="faq__item">
                    <h1>Frequently Asked Questions</h1>
                </div> 

                <div className="faq__item">
                    <h2>What is Acid Rain?</h2>
                    <p>Emissions from chemical plants, fossil fuel burning power plants and the internal combustion engine are transported and altered in our atmosphere. 
                    When deposited onto your vehicle’s surface in a dry state it may seem like simple dust, but mix it with a little bit of dew, sprinklers, or rainfall, 
                    and you have a mixture of sulfuric acid on your paint finish. Left on the surface for any period of time, and especially if placed in direct sunlight, 
                    you will have etching on your paint finish. Typical acid rain damage may first look like water droplets which have dried on the paint and caused discoloration. 
                    In some cases, damage appears as a white ring with a dull center. Severe cases show pitting. Depending on the level of defect, we can provide you with one of our 
                    detail packages to restore the finish accordingly. In many cases, a professional high speed buffing job will probably be the only way to remove the problem.</p>
                </div>

                <div className="faq__item">
                    <h2>What does a clay bar do?</h2>
                    <p>Claying is a process that is designed to remove environmental contaminants in your Clearcoat while leaving a clean smooth glass like finish ready for Wax or Sealant. 
                    The clay we are talking about Better known as Clay Magic is similar to the toy “Play-doh” that children enjoy although a special kind is required for car detailing.
                    It performs it’s function by deep cleaning the contaminants from the surface of the paint. Giving the car a smooth showroom surface like the day one buys his car.</p>
                </div>

                <div className="faq__item">
                    <h2>What are the most common causes of swirl marks in dark colored cars?</h2>
                    <p>Swirl marks are small micro scratches in the paints surface that become more visible in the direct sunlight. The most common causes are caused by:</p>
                    <ul>
                        <li>Washing the vehicle from the bottom up, thus dragging the dirt from the wheel well onto the middle panels of the vehicles which causes small scratches.</li>
                        <li>Washing vehicles in automatic car washes where nylon bristle brushes spin and scratch the vehicles paint.</li>
                        <li>The use of dirty or rough wash and drying towels can cause scratches. Try using micro fiber towels to help prevent paint swirls.</li>
                    </ul>
                </div>

                <div className="faq__item">
                    <h2>How do I remove swirl marks?</h2>
                    <p>The best way to remove swirl marks is by having a trained auto detail professional use a high speed polisher to polish the paint, then wax and nourish the 
                    paint back to “showroom condition”.</p>
                </div>

                <div className="faq__item">
                   <h2>What are the distinctions between polishes and waxes?</h2>
                    <p>There is a lot of confusion about the difference between a polish and a wax. Many manufacturers are marketing waxes as polishes. You have to read the labels 
                    closely to really understand what the product does. Professionals know there is a difference between the two. A pure polish is more like a paint conditioner that 
                    restores valuable oils to the paint, eliminates fine scratches and creates incredible high gloss that would not be possible with wax. An application of a pure 
                    polish should be followed by waxing to protect the shine and extend its life. If you own a dark car, you’ll see a dramatic difference, if you apply polish before 
                    you wax. If you want a great finish and to hide the scratches, it is best to use quality cleaners, pure polishes and waxes that restore the surface properly.</p>
                </div>

                <div className="faq__item">
                    <h2>My car is brand new, should I really have it detailed?</h2>
                    <p>Absolutely, you just made a large investment and now its time to ensure that your vehicle is protected. Car dealers rarely complete full details on new cars. 
                    During transit these vehicles collect debris and contaminants, then they sit sometimes on the lot sometimes for months. So when you pull off the lot there are 
                    a ton of contaminants still bonded on the paints surface, along with water spots which are sometimes visible. Having you car detailed at this point will ensure 
                    that your vehicle looks better than the day you bought it and lead you in the right direction toward lasting protection and beauty.</p>
                </div>

                <div className="faq__item">
                    <h2>How can I keep acid rain, diesel exhaust, and hard water spots from attacking my car's paint finish?</h2>
                    <p>This is a daily battle and the question cannot be answered without asking how often you are willing to spend taking care of your car. A simple mist-n-wipe 
                    product and a clean fresh micro fiber towel can save a lot of time and leave your finish in a beautiful state. The faster you can remove the contamination the better.</p>
                </div>

            </div>
        </section>
    </Layout>
)

export default FAQ;