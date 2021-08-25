import React from "react";
import about_banner_img from './img/about_banner_img.png';
import seework from './img/see-work.png';

export default function About() {
    return (
        <section className="banner about-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                        <img src={about_banner_img} alt="About Us" />
                    </figure>
                    </div>
                    <div className="col-md-6">
                    <div className="box">
                        <h4 className="ttu">About Us</h4>
                        <h4 className="ah_h4">A tight-knit team dedicated to our clients</h4>
                        <p>02DesignStudio was founded in 2018 with the idea in mind to make custom software solutions more accessible to the public. We believe that individuals or startups shouldn’t have to obtain a large amount of starting capital to gain a custom software solution to elevate their business.</p>
                        <p>At our agency we pride ourselves on open and transparent communication, and a client-first team. We stand by our motto of “premium service, without premium pricing.”  We provide pixel perfect solutions that drive results that help elevate our clients business.</p>
                        <ul>
                        <li><a href="/portfolio"><img src={seework} alt="See Our Works" />See our works</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
 