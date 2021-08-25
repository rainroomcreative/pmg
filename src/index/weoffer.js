import React from "react";
import customersupport from './img/customer-support.png';
import weofr2 from './img/weofr2.png';
import weofr3 from './img/weofr3.png';
import weofr4 from './img/weofr4.png';
import weofr5 from './img/weofr5.png';
import weofr6 from './img/weofr6.png';

export default function Weoffer() {
    return (
        <section className="we-ofer">
            <div className="container">
            <h4 className="mn-h4">
                <small>What We Offer</small>
                Cutting-edge solutions at every step
            </h4>
            <div className="row">
                <div className="col-md-4">
                <figure>
                    <span><img src={customersupport} alt="Custom branding and design based on your company's unique identity."/></span>
                    <figcaption>
                    Custom branding and design based on your company's unique identity.
                    </figcaption>
                </figure>
                </div>

                <div className="col-md-4">
                <figure>
                    <span><img src={weofr2} alt="UI/UX design for a seamless user experience."/></span>
                    <figcaption>
                    UI/UX design for a seamless user experience.
                    </figcaption>
                </figure>
                </div>

                <div className="col-md-4">
                <figure>
                    <span><img src={weofr3} alt="Responsive design optimized for all devices and screen sizes."/></span>
                    <figcaption>
                    Responsive design optimized for all devices and screen sizes.
                    </figcaption>
                </figure>
                </div>

                <div className="col-md-4">
                <figure>
                    <span><img src={weofr4} alt="Project Management"/></span>
                    <figcaption>
                    Project Management
                    </figcaption>
                </figure>
                </div>

                <div className="col-md-4">
                <figure>
                    <span><img src={weofr5} alt="Expert analytics implementations"/></span>
                    <figcaption>
                    Expert analytics <br/> implementations.
                    </figcaption>
                </figure>
                </div>

                <div className="col-md-4">
                <figure>
                    <span><img src={weofr6} alt="Ongoing maintenance and support for your security and peace of mind."/></span>
                    <figcaption>
                    Ongoing maintenance and support for your security and peace of mind.
                    </figcaption>
                </figure>
                </div>

            </div>
            </div>
        </section>
  
    );
  }
 