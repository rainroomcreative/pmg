import React, {useState, useEffect} from "react";
import { request } from 'graphql-request';
import Chip from '@material-ui/core/Chip';


export default function Ourwork() {


    const [works, setWorks] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect(() => {

      const fetchWorks = async () => {
        const {portfolios} = await request(
          `https://api-us-east-1.graphcms.com/v2/${process.env.REACT_APP_GraphCMSKey}/master`,
          `
          {
            portfolios(stage: PUBLISHED, locales: [en], orderBy: createdAt_DESC) {
              title
              description
              image {
                url
              }
              link
              isWebsite
              isGraphicDesign
              isApp
              isPm
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
   
      const handleDelete = () => () => {
        console.log("hey")
      }
      // The below function gets the even and odd indexes of the array and saves it to a new Array. 
      var even = [];
     const dynamicArray = (a) => {
        for (var i = 0; i < a.length; i++) {
            if(i % 2 === 0) { // index is even
                even.push(a[i]);
            } else {
                even.push(a[i]);
            }
        }
        return works
     }
     dynamicArray(works);
     // Mapping over the new array and creating new UI elements.
    const dynamicWorks = even.map((item, index) => {
        if(index % 2 === 0) {
            return(
                <section className="banner our-work bg-gray">
                <div className="container">
                    <div className="row work-1">
                        <div className="col-md-6">
                            <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                                <img src={item.image.url} alt="portfolio 1"/>
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <h4> {item.title} </h4>
                                {item.isWebsite ? <Chip label="Website" color="primary" size="small" className="chip" onDelete={handleDelete}/> : null}
                                {item.isApp ? <Chip label="App" color="secondary" size="small" className="chip" onDelete={handleDelete}/> : null}
                                {item.isGraphicDesign ? <Chip label="Graphic Design" style={{backgroundColor: "#ffb74d"}}  size="small" className="chip" onDelete={handleDelete}/> : null}
                                {item.isPm ? <Chip label="Project Management" style={{backgroundColor: "#8e24aa", color: "white"}} size="small" className="chip" onDelete={handleDelete}/> : null}
                                <p>{item.description}</p>
                                {item.link ? 
                                <ul>
                                    <li><a target="_blank" href={item.link} rel="noreferrer">View Project</a></li>
                                </ul>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )
        } else {
            return (
                <section className="banner our-work">
                <div className="container">
                    <div className="row work-2">
                        <div className="col-md-6 order-md-1 order-2">
                            <div className="box ">
                                <h4>{item.title}</h4>
                                {item.isWebsite ? <Chip label="Website" color="primary" size="small" className="chip" onDelete={handleDelete}/> : null}
                                {item.isApp ? <Chip label="App" color="secondary" size="small" className="chip" onDelete={handleDelete}/> : null}
                                {item.isGraphicDesign ? <Chip label="Graphic Design" style={{backgroundColor: "#ffb74d"}}  size="small" className="chip" onDelete={handleDelete}/> : null}
                                {item.isPm ? <Chip label="Project Management" style={{backgroundColor: "#8e24aa", color: "white"}} size="small" className="chip" onDelete={handleDelete}/> : null}
                                <p>{item.description}</p>
                                {item.link ? 
                                <ul>
                                    <li><a target="_blank" href={item.link} rel="noreferrer">View Project</a></li>
                                </ul>
                                    : null}
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 order-1">
                            <figure className="hover-overlay ripple ripple-surface ripple-surface-light">
                                <img src={item.image.url} alt="portfolio 2" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            )
        }
  
    })

 
    
    return (
    <div>
        {dynamicWorks}
    </div>
    );
  }
 