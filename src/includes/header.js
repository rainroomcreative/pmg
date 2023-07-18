import React, {useState} from "react";
import { ReactSVG } from 'react-svg';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import logo from './images/PMG-logo.svg';
import mobileLogo from './images/PMG-logo-mobile.svg';
import {ReactComponent as Hamburger} from './images/charm_menu-hamburger.svg';
import {ReactComponent as Facebook} from './images/ic_outline-facebook.svg';
import {ReactComponent as Linkedin} from './images/ri_linkedin-box-fill.svg';
import {ReactComponent as Close} from './images/ph_x-bold.svg';


const Header = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const MobileNav = (action) => {
        if (action === 'close') {
            setMobileNav(false);
        } else if (action === 'open') {
            setMobileNav(!mobileNav);
        }
    }


    return (
        <div className={"bg-blue px-6 flex" + `${mobileNav ? " h-screen items-start lg:items-center lg:h-fit" : " items-center"}`}>
            <header className="flex shrink-0 flex-row justify-between items-center w-full relative h-32">
                <div className="w-3/12">
                    <Link to="/" onClick={() => MobileNav('close')}>
                        <img src={logo} alt="Partnered Management Group" className="hidden lg:block"/>
                        <ReactSVG width="94" src={mobileLogo} alt="Partnered Management Group" className="block w-[47px] lg:hidden"/>
                    </Link>
                </div>
                <div className="w-9/12 flex flex-col shrink-0 justify-center items-end lg:justify-end lg:items-center lg:flex-row">
                    <div className="block lg:hidden" onClick={() => MobileNav('open')}>
                        <Hamburger className={mobileNav ? "hidden" : "block"}/>
                        <Close className={mobileNav ? "block" : "hidden"} />
                    </div>
                    <ul className={"text-white font-normal text-sm flex-col absolute top-32 w-full gap-11 lg:flex-row lg:justify-end lg:items-center lg:gap-14 lg:static" + `${mobileNav ? " flex lg:flex" : " hidden lg:flex"}`} onClick={() => MobileNav('close')}>
                        <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><Link to="/about">Why PMG?</Link></li>
                        <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><Link to="/portfolio">Case Studies</Link></li>
                        <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><Link to="/services">Services</Link></li>
                        <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><Link to="/pricing">Pricing</Link></li>
                        <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><a href="https://blog.partneredmg.com" target="_blank">Blog</a></li>
                        <li><HashLink to="/#contact" className="text-black bg-white py-3 px-14 rounded-3xl max-w-sm w-full mx-auto lg:w-fit lg:mx-0">Contact Us</HashLink></li>
                        <li className="w-full flex flex-row items-center justify-center gap-6 lg:hidden">
                            <a href="https://www.linkedin.com/company/partnered-management-group" target="_blank" rel="noreferrer">
                                <Linkedin />
                            </a>
                            <a href="https://www.facebook.com/partneredmanagementgroup" target="_blank" rel="noreferrer">
                                <Facebook />
                            </a>
                        </li>
                    </ul>

                </div>
            </header>
        </div>
    );
}
/*class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: false
        };
    }

    MobileNav = () => {
        if (this.state.nav === false) {
            this.setState({
                nav: true
            });
        } else {
            this.setState({
                nav: false
            });
        }
    }


    render (props) {
        return (
            <div className={"bg-blue px-6 flex" + `${this.state.nav ? " h-screen items-start lg:items-center lg:h-fit" : " items-center"}`}>
                <header className="flex shrink-0 flex-row justify-between items-center w-full relative h-32">
                    <div className="w-3/12">
                        <Link to="/" onClick={this.MobileNav}>
                            <img src={logo} alt="Partnered Management Group" className="hidden lg:block"/>
                            <img src={mobileLogo} alt="Partnered Management Group" className="block lg:hidden"/>
                        </Link>
                    </div>
                    <div className="w-9/12 flex flex-col shrink-0 justify-center items-end lg:justify-end lg:items-center lg:flex-row">
                        <div className="block lg:hidden" onClick={this.MobileNav}>
                            <Hamburger className={this.state.nav ? "hidden" : "block"}/>
                            <Close className={this.state.nav ? "block" : "hidden"} />
                        </div>
                        <ul className={"text-white font-normal text-sm flex-col absolute top-32 w-full gap-11 lg:flex-row lg:justify-end lg:items-center lg:gap-14 lg:static" + `${this.state.nav ? " flex lg:flex" : " hidden lg:flex"}`} onClick={this.MobileNav}>
                            <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><Link to="/about">Why PMG?</Link></li>
                            <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><Link to="/portfolio">Case Studies</Link></li>
                            <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><Link to="/services">Services</Link></li>
                            <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><Link to="/pricing">Pricing</Link></li>
                            <li className="lg:pb-0.5 lg:border-b-solid lg:border-b lg:border-b-blue hover:lg:border-b-white"><Link to="/blog">Blog</Link></li>
                            <li className="text-black bg-white py-3 px-14 rounded-3xl max-w-sm w-full mx-auto lg:w-fit lg:mx-0"><a href="#contact">Contact Us</a></li>
                            <li className="w-full flex flex-row items-center justify-center gap-6 lg:hidden">
                                <a href="https://www.linkedin.com/company/partnered-management-group" target="_blank" rel="noreferrer">
                                    <Linkedin />
                                </a>
                                <a href="https://www.facebook.com/partneredmanagementgroup" target="_blank" rel="noreferrer">
                                    <Facebook />
                                </a>
                            </li>
                        </ul>

                    </div>
                </header>
            </div>
        );
    };
}*/

export default Header;


