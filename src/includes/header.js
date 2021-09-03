import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link
} from "react-router-dom";
import logo from './logo.png';
import Home from './../index/index';
import About from './../about/index';
import Services from './../services/index';
import Portfolio from './../portfolio/index';
import TermsAndPrivactPolicy from "../terms/terms-and-privacy-policy";
import Modal from "./modal";

export default function Header() {
    

  const ModalOpen = () => {
    document.getElementById('exampleModal').classList.add('show');
    document.getElementById("exampleModal").style.display="block"; 
    document.body.style.overflow="hidden"; 
    document.body.classList.add('modal-open');
  };
    return (
        <div>
            <Router>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <Link className="logo" to="/"><img src={logo} alt="02DesignStudio"/></Link>
                            </div>

                            <div className="col-md-7">
                                    <ul>
                                        <li><NavLink activeClassName='active' exact={true} to='/'>Home</NavLink></li>
                                        <li><NavLink activeClassName='active' to='/about'>About</NavLink></li>
                                        <li><NavLink activeClassName='active' to='/services'>Services</NavLink></li>
                                        <li><NavLink activeClassName='active' to='/portfolio'>Portfolio</NavLink></li>
                                        <li><button onClick={ModalOpen}
                                        type="button" className="btn contact-modal"
                                        data-mdb-toggle="modal" data-mdb-target="#exampleModal"> Contact Us </button></li>
                                    </ul>
                                    
                            </div>
                        </div>
                    </div>
                </header>
                <Modal/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/terms-and-privacy-policy" component={TermsAndPrivactPolicy} />
                </Switch>
            </Router>
        </div>
    );
  }

 