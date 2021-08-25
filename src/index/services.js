import React from "react";
import servicebg from './img/service-bg.png';
import servicon1 from './img/serv-icon1.png';
import servicon2 from './img/serv-icon2.png';
import servicon3 from './img/serv-icon3.png';
import servicon4 from './img/serv-icon4.png';

export default function Services() {
    return (
        <section className="sevice-sec" style={{backgroundImage: `url(${servicebg})`  }}>
            <div className="container">
                <h4 className="mn-h4">
                <small>OUR SERVICES</small>
                Our hassle free solutions so you can focus on your business
                </h4>

                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="serv-box">
                    <span><img src={servicon1} alt="Design"/></span>
                    <h5>Design</h5>
                    <p>We love to work with our clients and provide them the utmost customization. Our designers will make sure you have a pixel-perfect design that meets your exact specification</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serv-box serv-box2">
                    <span><img src={servicon2} alt="Development"/></span>
                    <h5>Development</h5>
                    <p>Our team of Developers will ensure your project is secure, maintainable, and scalable. We understand that business growth can be unpredictable, and we want to give you flexibility in scaling.</p>
                    </div>
                </div>
                <div className="col-md-2"></div>
                </div>

                <br/>
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <div className="serv-box serv-box2">
                    <span><img src={servicon3} alt="Optimization"/></span>
                    <h5>Optimization</h5>
                    <p>02DesignStudio has the experience, expertise, and talent to ensure that your project is optimized for both browser and mobile devices. We will work with you every step of the way. 02DesignStudio will provide a high-quality product in an efficient amount of time.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="serv-box">
                    <span><img src={servicon4} alt="Consulting"/></span>
                    <h5>Consulting</h5>
                    <p>We take the weight of your project off your shoulders. Utilizing our expertise, we can cut down on the time and effort needed to complete any job with a lower error rate than working alone. When projects go well, they're great for everyone involved - including you!</p>
                    </div>
                </div>
                <div className="col-md-2"></div>
                </div>

            </div>
        </section>
  
    );
  }
 