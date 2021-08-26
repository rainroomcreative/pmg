import React from "react";
import wcu from './img/wcu.png';
import icon_1 from './img/icon_1.png';
import icon_2 from './img/icon_2.png';
import icon_3 from './img/icon_3.png';

export default function Whychooseus() {
    return (
        <section className="banner wcu-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <figure>
                            <img src={wcu} alt="Why Choose Us" />
                        </figure>
                    </div>
                    <div className="col-md-5">
                        <h4 className="mb-4">Our Principles</h4>
                        <p>Below are the principles that our agency abides by</p>
                        <ul className="img-ul">
                            <li>
                                <figure>
                                    <img src={icon_1} alt="PROFESSIONALISM" />
                                </figure>
                                <div className="wcu_box">
                                    <h5>PROFESSIONALISM</h5>
                                    <p>Our agency focuses on a hassle-free approach. A major factor in our company's success is the effort we put into minimizing inconveniences for clients by simplifying processes, managing expectations to ensure they are realistic, and avoiding surprises through careful planning.</p>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img src={icon_2} alt="AFFORDABILITY" />
                                </figure>
                                <div className="wcu_box">
                                    <h5>AFFORDABILITY</h5>
                                    <p>02DesignStudio provides a premium service without the high prices associated with it, making our services more accessible to personal, small, and medium enterprise clients.</p>
                                </div>
                            </li>
                            <li>
                                <figure>
                                    <img src={icon_3} alt="CUSTOMER SERVICE" />
                                </figure>
                                <div className="wcu_box">
                                    <h5>CUSTOMER SERVICE</h5>
                                    <p>Our team is committed to open and clear communication. You will never be in the dark about what's going on with your project so you can make informed decisions quickly.</p>
                                </div>
                            </li>

                            <li>
                                <figure>
                                    <img src={icon_1} alt="CLEAN CODE" />
                                </figure>
                                <div className="wcu_box">
                                    <h5>CLEAN CODE</h5>
                                    <p>At our agency, we understand the challenges that come with growing a business. We make sure your application is future-proof and will scale as you grow so it doesn't hinder potential success.</p>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
  }
 