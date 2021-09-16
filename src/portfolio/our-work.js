import React, {useState, useEffect} from "react";
import { request } from 'graphql-request';



export default function Ourwork() {


    const [works, setWorks] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect(() => {

         

      const fetchWorks = async () => {

        const {portfolios} = await request(
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
        )
         setWorks(portfolios);
        setLoading(false);
      };
  
      fetchWorks();
      
    }, []);


    if (loading) {
        return <div className="App">Loading...</div>;
      }
 






    return (
    <div>
        <section className="banner our-work bg-gray">
            <div className="container">
                <div className="row work-1">
                    <div className="col-md-6">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={works[0].image.url} alt="portfolio 1"/>
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h4> {works[0].title} </h4>
                            <p>{works[0].description}</p>
                            <ul>
                                <li><a target="_blank" href={works[0].link} rel="noreferrer">View Project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="banner our-work">
            <div className="container">
                <div className="row work-2">
                    <div className="col-md-6 order-md-1 order-2">
                        <div className="box ">
                            <h4>{works[1].title}</h4>
                            <p>{works[1].description}</p>
                            <ul>
                                <li><a target="_blank" href={works[1].link} rel="noreferrer">View Project</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2 order-1">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={works[1].image.url} alt="portfolio 2" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section className="banner our-work bg-gray mb-0">
            <div className="container">
                <div className="row work-3">
                    <div className="col-md-6">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={works[2].image.url} alt="portfolio 3" />
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <h4>{works[2].title}</h4>
                            <p>{works[2].description}</p>
                            <ul>
                                <li><a target="_blank" href={works[2].link} rel="noreferrer">View Project</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="banner our-work">
            <div className="container">
                <div className="row work-2">
                    <div className="col-md-6 order-md-1 order-2">
                        <div className="box ">
                            <h4>{works[3].title}</h4>
                            <p>{works[3].description}</p>
                            <ul>
                                <li><a target="_blank" href={works[3].link} rel="noreferrer">View Project</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2 order-1">
                        <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                            <img src={works[3].image.url} alt="portfolio 2" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
  }
 