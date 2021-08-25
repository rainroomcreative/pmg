import React from "react";
import protfolio from './img/protfolio.png';

export default function Banner() {
    return (
    <div>
        <section className="banner solution">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <h4>Our Portfolio</h4>
                            <p>Below you will find examples of our most recent works.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={protfolio} alt="Our Portfolio" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="banner our-work p-0 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="box">
                            <h4 className="mn-h4 mb-0">Some of Our Work</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
 