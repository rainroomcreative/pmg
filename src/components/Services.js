import React from 'react';
import Fade from 'react-reveal/Fade';
import {Card, CardContent} from 'semantic-ui-react';

import {Globe, WordpressComp, PeopleIcon} from './Icons';


const Services = () => {
    return (
        <Fade top duration={3000}>
            <div id="services">
            <div className="row services-row justify-content-center" id="services-row">
                {/* <div className="col-xs col-sm col-md col-lg col-xl"> */}
                
                <h1 className="text-center services-text" id="services-text">Services</h1>
                
            </div>
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column justify-content-around" >
            <Card className="web-card "> 
                <Card.Content>
                    <Card.Header textAlign="center">
                        <Globe />
                        <h3 id="web-text">Website Development</h3>
                    </Card.Header>
                    <Card.Description textAlign="left">
                        <h4 id="services-1-description">I provide a web development service to deliver a product that is created
                        using the latest technologies, to ensure the quality, functionality, and security of your site. Sites will be
            responsive across all devices. </h4>
                    </Card.Description>
                </Card.Content>
            </Card>

             <Card className="wordpress-card"> 
                <Card.Content>
                    <Card.Header textAlign='center'>
                        <WordpressComp  />
                       <h3 id="wordpress">CMS Development</h3>
                    </Card.Header>
                    <Card.Description textAlign='left'>
                       <h4 id="services-2-description">If you are in need of a reliable and scaleable Wordpress or Squarespace site,
                        please use
              the "Contact" page to request a quote. </h4>
                    </Card.Description>
                </Card.Content>
            </Card>

                <Card className="consulting-card"> 
                <Card.Content>
                    <Card.Header textAlign='center'>
                        <PeopleIcon />
                         <h3 className="consulting-title" id="consulting-title-id">Consulting Services</h3>
                    </Card.Header>
                    <Card.Description textAlign='left'>
                       <h4 id="services-3-description"> If you are in need of technical support for your site, need to modernize your
                        site, or need help setting up a domain for your site I am available for consulting. I will provide a quality
              product with customer service as my top priority. If interested, please use the "Contact page.”</h4>
                    </Card.Description>
                </Card.Content>
            </Card>
            </div>


            <div className="row justify-content-center" id="about-chevron">
                {/* <div className="col-xs col-sm col-md col-lg col-xl"> */}
                    <a className="about-link" id="about-link" href="#about">
                        <i className="fas fa-chevron-down p-3 bg-white" id="me-chevron" aria-hidden="true"></i>
                    </a>
                {/* </div> */}
            </div>
        </div>
        </Fade>
        
    )
}

export default Services;