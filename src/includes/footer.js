import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import footerlogo from './footer-logo.png';
import footerbg from './footer-bg.png';



export default function Footer() {
    const ModalOpen = () => {
        document.getElementById('exampleModal').classList.add('show');
        document.getElementById("exampleModal").style.display="block"; 
        document.body.style.overflow="hidden"; 
        document.body.classList.add('modal-open');
      };
      let emailString = "02designstudio.com";
    return (
        <footer className="footer" style={{backgroundImage: `url(${footerbg})`  }}>
            <div className="container">
                <div className="foot-top">
                    <div className="row">
                    <div className="col-md-8">
                        <h4>Ready to elevate your business? Let’s get started</h4>
                    </div>
                    <div className="col-md-4">
                        <a className="btn" onClick={ModalOpen} >Start a Project</a>
                    </div>
                    </div>
                </div>
                <hr className="my-0" />
                <div className="foot-mid">
                    <div className="row">
                    <div className="col-md-3">
                        <figure>
                            <Link className="foot-logo" to="/"><img src={footerlogo} alt="02 Design Studio" /></Link>
                        </figure>
                    </div>
                    <div className="col-md-2">
                        <h4>Useful links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                            </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Need Help?</h4>
                        
                        <ul>
                            <li><Link to="/terms-and-privacy-policy#privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-privacy-policy">Terms</Link></li>
                            <li><Link to={{ pathname: "https://forms.clickup.com/14342969/f/dnptt-1504/SKODMWOWC2OI07C0A5"}} target="_blank">Report Bug</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Contact</h4>
                        <Router>
                        <ul>
                        <li><a href="mailto:support@02designstudio.com" rel="noreferrer">support@02designstudio.com</a></li>
                        <li><a href="tel:+12159774687" rel="noreferrer">(215)-977-4687</a></li>
                        <li><a target="_blank" href="https://www.facebook.com/real02Designstudio" rel="noreferrer">Facebook</a></li>
                        </ul>
                        </Router>
                    </div>
                    <div className="col-md-2">
                    </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <p>Copyright © 2022-2023</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <p className="pull-right"><span>02Designstudio</span> All rights reserved</p>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
 