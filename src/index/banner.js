import React from "react";
import seework from './img/see-work.png';
import bannerimg from './img/banner-img.png';
import { Link } from "react-router-dom";

export default function Banner() {
    const ModalOpen = () => {
        document.getElementById('exampleModal').classList.add('show');
        document.getElementById("exampleModal").style.display="block"; 
        document.body.style.overflow="hidden"; 
        document.body.classList.add('modal-open');
      };
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                <div className="col-md-5">
                    <div className="box">
                    <h4>Pixel perfect CUSTOM solutions </h4>
                    <p>A web and app design, development, and consulting agency focused on providing premium services, without premium prices.</p>
                    <ul>
                        <li><Link to="/portfolio"><img src={seework} alt="See Our Works"/>See our works</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-7">
                    <figure className="bg-image hover-overlay ripple ripple-surface ripple-surface-light">
                    <img src={bannerimg} alt="Banner" />
                    </figure>
                </div>
                </div>
            </div>
            </section>
  
    );
  }
 