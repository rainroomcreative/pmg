import React from "react";
import work_1 from './img/work_1.png';
import work_2 from './img/work_2.png';
import work_3 from './img/work_3.png';

export default function Ourwork() {
    return (
    <div>
        <section className="banner our-work bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={work_1} alt="Lorem Ipsum"/>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul>
                                <li><a href="/">View Project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="banner our-work">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul>
                                <li><a href="/">View Project</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={work_2} alt="Lorem Ipsum" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="banner our-work bg-gray mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={work_3} alt="Lorem Ipsum" />
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul>
                                <li><a href="/">View Project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
 