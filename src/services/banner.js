import React from "react";
import solution from './img/solution.png';
import wfond from './img/wfond.png';

export default function Banner() {
    return (
        <div>
            <section className="banner solution">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box">
                                <h4>100% Customer Satisfaction</h4>
                                <p>Our agency has a 100% customer satisfaction rate. We provide a premier customer service. Our team is not satisfied until YOU are.</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                                <img src={solution} alt="100% Customer Satisfaction" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner solution">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                                <img src={wfond} alt="Why 02DesignStudio?" />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <h4>Why 02DesignStudio?</h4>
                                <p>We're here to get the job done and provide a hassle-free experience, so you can focus on what matters.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div> 
    );
  }
 