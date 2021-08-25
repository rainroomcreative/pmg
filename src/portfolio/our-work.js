import React, {useState, useEffect} from "react";
import { request } from 'graphql-request';

import work_1 from './img/work_1.png';
import work_2 from './img/work_2.png';
import work_3 from './img/work_3.png';

export default function Ourwork() {


    const [works, setWorks] = useState(null);

    useEffect(() => {


      const fetchWorks = async () => {

        await request(
          'https://api-us-east-1.graphcms.com/v2/cksrlunl342hx01yu9obq083f/master',
          `
         {
            portfolios(stage: PUBLISHED, locales: [en]) {
                title
                description
                image {
                  url
                }
                link
              }
         }
      `
        ).then((data) => setWorks(data));
  
        
      };
  
      fetchWorks();
      
    }, []);

    console.log(works);










    return (
    <div>
        <section className="banner our-work bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={works.portfolios[0].image.url} alt="portfolio 1"/>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h4>{works.portfolios[0].title}</h4>
                            <p>{works.portfolios[0].description}.</p>
                            <ul>
                                <li><a href={works.portfolios[0].link}>View Project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="banner our-work">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box">
                            <h4>{works.portfolios[1].title}</h4>
                            <p>{works.portfolios[1].description}.</p>
                            <ul>
                                <li><a href={works.portfolios[1].link}>View Project</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={works.portfolios[1].image.url} alt="portfolio 2" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="banner our-work bg-gray mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={works.portfolios[2].image.url} alt="portfolio 3" />
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h4>{works.portfolios[2].title}</h4>
                            <p>{works.portfolios[2].description}.</p>
                            <ul>
                                <li><a href={works.portfolios[2].link}>View Project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
 