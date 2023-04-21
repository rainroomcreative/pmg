import React, {useEffect, useState} from "react";
import Hero from "./hero";
import { request } from 'graphql-request';
import CaseStudy from "./caseStudy";



const Portfolio = () => {
  const [caseStudies, setCaseStudy] = useState(null);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      console.log('fetching case studies');
      const {caseStudies} = await request(
        `https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clg1lau9f8j5c01uigtgl5pl5/master`,
        `
        {
          caseStudies {
            logo {
              id
              url
            }
            companyName
            shortDescription
            statisticNumber1
            statisticText1
            statisticNumber2
            statisticText2
            statisticNumber3
            statisticText3
            id
          }
        }
    `
    );
      setCaseStudy(caseStudies);
          
    }
    fetchCaseStudies();
  }, []);

  console.log({caseStudies});  

    return (
        <div>
          <Hero />
          <div className="w-full caseStudy-container">
            {caseStudies && caseStudies.map((caseStudy, index) => (
                <CaseStudy caseStudy={caseStudy} key={caseStudy.id} index={index}/>
              ))}
          </div>
        </div>
    );
}

export default Portfolio;