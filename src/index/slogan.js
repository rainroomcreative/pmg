import React from "react";
import servicebg from './img/technology-bg.png';

export default function Slogan() {
    const ModalOpen = () => {
        document.getElementById('exampleModal').classList.add('show');
        document.getElementById("exampleModal").style.display="block"; 
        document.body.style.overflow="hidden"; 
        document.body.classList.add('modal-open');
      };
    return (
        <section className="home-techno" style={{backgroundImage: `url(${servicebg})`  }}>
            <div className="container">
                <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h4>A creative development team with a commitment to our CLIENTS</h4>
                    <p>We believe that success starts with strong partnerships. Every client is different, so we keep our operation lean to be able to adapt to our client’s needs. We create solutions that scale with your business and drive results. We are not satisfied until our clients are 100% satisfied.</p>
                    <a onClick={ModalOpen} className="btn" >Start a Project</a>
                </div>
                <div className="col-md-2"></div>
                </div>
            </div>
            </section>
  
    );
  }
 