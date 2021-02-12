import React from 'react';
import Fade from 'react-reveal/Fade';


const Services = () => {
    return (
        <Fade top duration={3000}>
            <div   id="services">
            <div className="row services-row" id="services-row">
                <div className="col-xs col-sm col-md col-lg col-xl">
                    <h1 className="text-center services-text" id="services-text">Services</h1>
                </div>
            </div>

            <div className="row web-row-contain services-content" id="web-id">
                <div className="row">
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <ion-icon name="globe-outline" id="ion-icon-globe" role="img" className="md hydrated" aria-label="globe outline">
                        </ion-icon>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <h3 id="web-text">Website development</h3>
                        <h4 id="services-1-description">I provide a web development service to deliver a product that is created
                        using the latest technologies, to ensure the quality, functionality, and security of your site. Sites will be
            responsive across all devices. </h4>
                    </div>
                </div>
            </div>

            <div className="row wordpress services-content" id="word-id">
                <div className="row">
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <ion-icon name="server" id="ion-icon-desktop" role="img" className="md hydrated" aria-label="logo wordpress">
                        </ion-icon>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <h3 id="wordpress">CMS Development</h3>
                        <h4 id="services-2-description">If you are in need of a reliable and scaleable Wordpress or Squarespace site,
                        please use
              the "Contact" page to request a quote. </h4>
                    </div>
                </div>
            </div>

            <div className="row consulting services-content">
                <div className="row">
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <ion-icon name="people-circle-outline" id="ion-icon-people" role="img" className="md hydrated"
                            aria-label="people circle outline"></ion-icon>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs col-sm col-md col-lg col-xl">
                        <h3 className="consulting-title" id="consulting-title-id">Consulting Services</h3>
                        <h4 id="services-3-description"> If you are in need of technical support for your site, need to modernize your
                        site, or need help setting up a domain for your site I am available for consulting. I will provide a quality
              product with customer service as my top priority. If interested, please use the "Contact page.”</h4>
                    </div>
                </div>
            </div>


            <div className="row" id="about-chevron">
                <div className="col-xs col-sm col-md col-lg col-xl">
                    <a className="about-link" id="about-link" href="#about">
                        <i className="fas fa-chevron-down p-3 bg-white" id="me-chevron" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        </Fade>
        
    )
}

export default Services;