import React from "react";
import {Link} from "react-router-dom";
import logo from "./images/PMG-logo-icon.svg";
import {ReactComponent as Facebook} from "./images/ic_outline-facebook.svg";
import {ReactComponent as Linkedin} from "./images/ri_linkedin-box-fill.svg";


class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-blue text-white text-xs py-12 font-light lg:py-20">
                <div className="container mx-auto flex flex-col items-stretch lg:flex-row lg:justify-between lg:items:start">
                    <div className="py-10 border-y border-y-white border-y-solid order-1 lg:order-2 lg:items-start lg:justify-start lg:py-0 lg:border-0">
                        <h4 className="hidden text-sm mb-6 lg:block">Site Pages</h4>
                        <ul className="flex flex-col gap-3 justify-center items-center lg:items-start lg:justify-start">
                            <li><Link to="/">Homepage</Link></li>
                            <li><Link to="/about">Why PMG?</Link></li>
                            <li><Link to="/portfolio">Case Studies</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/services">Services</Link></li>
                        </ul>
                    </div>
                    <div className="pt-10 flex flex-col gap-3 justify-center items-center order-2 lg:order-1 lg:items-start lg:justify-start lg:pt-0">
                        <img className="mx-auto lg:mb-6" src={logo} alt="Partnered Management Group" />
                        <p className="font-normal hidden lg:block">© PartnerManagementGroup - 2022</p>
                    </div>
                    <div className="pt-10 order-4 flex flex-col gap-3 lg:order-3 lg:items-start lg:justify-start lg:pt-0 lg:gap-0">
                        <h4 className="hidden text-sm mb-6 lg:block">Help</h4>
                        <ul className="flex flex-col gap-3 justify-center items-center lg:items-start lg:justify-start">
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/report-a-bug">Report A Bug</Link></li>
                        </ul>
                        <p className="font-normal block lg:hidden">© PartnerManagementGroup - 2022</p>
                    </div>
                    <div className="pt-10 flex flex-col gap-3 justify-center items-center order-3 lg:order-4 lg:items-start lg:justify-start lg:pt-0 lg:gap-0">
                        <h4 className="hidden text-sm mb-6 lg:block">Follow Us</h4>
                        <div className="flex flex-row justify-center items-center gap-6">
                            <a href="https://www.linkedin.com/company/partnered-management-group" target="_blank" rel="noreferrer">
                                <Linkedin />
                            </a>
                            <a href="https://www.facebook.com/PartneredManagementGroup" target="_blank" rel="noreferrer">
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;