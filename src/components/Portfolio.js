import React from 'react';


// External imports
import Fade from 'react-reveal/Fade';

const Portfolio = () => {
    return ( 
         <div className="container">
                  
                  <div className="row porfolio-row">
                        <div className=" col-xs col-sm col-md col-lg col-xl portfolio-col">
                              <h1 className="portfolio-content" id="port">Portfolio</h1>
                        </div>
                  </div>
                  <Fade right duration={1000}>
                    <div className="row pilot-row">
                        <div  className=" col-xs col-sm col-md col-lg col-xl" id="portfolio-one">
                        <a id="pilot-link" href="https://www.02pilot.com" target="_blank" rel="noreferrer" >
                              <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/v1606430218/Portfolio/02pilot_jrdoxn.png" alt="first portfolio logo" height="200" width="400" className="round" id="portfolio-one-image" />
                                    </a>
                              </div>
                        
                  </div>
                  </Fade>
                  
                <Fade right duration={1000} delay={400}>
                    <div className="row new-row">
                        <div   id="portfolio-two" className="col-xs col-sm col-md col-lg col-xl portfolio-move">
                        <a id="new-link" href="https://www.thehhmp.org" arget="_blank" rel="noreferrer">
                          <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/v1613144080/Portfolio/Facetime_sff20t.png" className="img-fluid round"
                            alt="second portfolio logo" height="200" width="400"  id="portfolio-two-image" />
                              </a>
                              </div>
                        
                  </div>
                </Fade>
                 
                 <Fade right duration={1000} delay={750}>
                    <div className="row davie-row">
                        <div  id="portfolio-six"
                              className=" col-xs col-sm col-md col-lg col-xl portfolio-move">
                              <a id="davie-link" href="https://reality.ai" target="_blank" rel="noreferrer">
                                    <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/v1609972039/Portfolio/reality-ai_yokyat.png" className="img-fluid round" alt="Sixth portfolio logo"
                                          height="200" width="400" id="portfolio-six-image" />
                              </a>
                        </div>
                  </div>
                 </Fade>
                  
                <Fade right duration={1000} delay={500}>
                         <div className="row tea-row">
                     <div id="portfolio-three"
                      className="col-xs col-sm col-md col-lg col-xl portfolio-move">
                        <a id="tea-link" href="https://personal-blog-portfolio.herokuapp.com/" target="_blank" rel="noreferrer">
                          <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/v1606430218/Portfolio/blog_qjnq1g.png" className="img-fluid round" alt="third portfolio logo"
                              height="200" width="400" id="portfolio-three-image" />
                              </a>
                              </div>
                       
                  </div>
                     </Fade>
                 
                 <Fade right duration={1000} delay={650}> 
                     <div className="row broadway-row">
                        <div   id="portfolio-four"
                         className=" col-xs col-sm col-md col-lg col-x portfolio-move">
                         <a id="broadway-link" href="https://twilio-sms-app.herokuapp.com/" target="_blank" rel="noreferrer">
                          <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/v1606430228/Portfolio/twilio_hid3jc.png" className="img-fluid round" alt="Fourth portfolio logo"
                              height="200" width="400" id="portfolio-four-image" />
                              </a>
                              </div>
                  </div>
                 </Fade>
                 
                 <Fade duration={1000} delay={700}> 
                    <div className="row coffee-row">
                        <div id="portfolio-five" className=" col-xs col-sm col-md col-lg col-xl portfolio-move">
                              <a id="coffee-link" href="https://youtube-search-angular.herokuapp.com/" target="_blank" rel="noreferrer">
                                <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/v1610392972/Portfolio/youtube-angular_f0tzrb.png" className="img-fluid round" alt="Fifth portfolio logo"
                                    height="200" width="400" id="portfolio-five-image" />
                              </a>
                              </div>
                  </div>
                 </Fade>
                  
                  <Fade duration={1000} delay={800}>
                     <div className="row travel-row">
                  <div id="portfolio-seven" className="col-xs col-sm col-md col-lg col-xl portfolio-move">
                        <a id="travel-link" href="/travel" target="_blank" rel="noreferrer">
                              <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/v1606430228/Portfolio/travels_qlcouy.jpg" className="img-fluid round" alt="Seventh portfolio logo" height="200" width="400" id="portfolio-seven-image" />
                                    </a>
                              </div>
                  </div>
                  </Fade>
                 
              
            
           
      </div>
    )
}

export default Portfolio;