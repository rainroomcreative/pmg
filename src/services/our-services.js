import React from "react";
import Design from './img/Design.png';
import Development from './img/Development.png';
import optimization from './img/optimization.png';
import Consulting from './img/Consulting.png';
import technologybg from './img/technology-bg.png';

export default function Ourservices() {
    return (
        <section className="home-techno ah_services" style={{backgroundImage: `url(${technologybg})`  }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="mn-h4">
                            <small className="ttu">Our Services</small>
                            Services to help your business SUCCEED
                        </h4>
                    </div>
                    <div className="w-100 mb-5"></div>
                    <div className="col-md-3">
                        <figure>
                            <span><img src={Design} alt="Design"/></span>
                            <figcaption>
                                <h5>Design</h5>
                                Your brand has a voice. Our team specializes in capturing your brands voice through creative design.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure>
                            <span><img src={Development} alt="Development" /></span>
                            <figcaption>
                                <h5>Development</h5>
                                Our team of developers utilize the latest tools and frameworks to create secure, scalable, high performing applications that drive results.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure>
                            <span><img src={optimization} alt="Optimization" /></span>
                            <figcaption>
                                <h5>Optimization</h5>
                                A software solution is only as good as its ability to perform and deliver results on the metrics you care most about. The solutions we create are ready to perform at the highest level.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure>
                            <span><img src={Consulting} alt="Consulting" /></span>
                            <figcaption>
                                <h5>Consulting</h5>
                                We know what it takes to run a team efficiently to deliver a product on time. By utilizing our expertise, we cut down on the time and effort needed to complete any job with a lower error rate than working alone.
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
  }
 