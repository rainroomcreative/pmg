import React from 'react';

const Footer = () => {
    return (
        <div className="">
            <footer id="footer" className="text-center">
                <h5 className="company-contact">
                    <a href="tel:443-681-9485" className="d-block d-sm-inline">443-681-9485</a> 
                    <span className="d-none d-sm-inline"> || </span>
                    <a href="mailto:augustshah@02pilot.com" className="d-block d-sm-inline">augustshah@02pilot.com</a> 
                </h5>
                <h5 className="copyright-text">Copyright &copy; 2021 02Pilot LLC</h5>
            </footer>
        </div>
    )
}

export default Footer;