import React, {useEffect, useState} from "react";
import Hero from "./hero";
import { request } from 'graphql-request';
import CaseStudy from "./caseStudy";



const Portfolio = () => {
  const [caseStudies, setCaseStudy] = useState(null);
  const [isActive, setIsActive] = useState("0");

  const toggleCaseStudy = (id) => {
    console.log('id: ', id)
    console.log('active 1: ',isActive)
    if (isActive === id) {
        return setIsActive("0");
       }
       setIsActive(id);
  };

  console.log('active 2: ', isActive)

  useEffect(() => {
    const fetchCaseStudies = async () => {
      console.log('fetching case studies');
      const {caseStudies} = await request(
        `https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/${process.env.REACT_APP_CS_KEY}/master`,
        `
        {
          caseStudies {
            logoWhite {
              id
              url
            }
            logoBlack {
              id
              url
            }
            companyName
            backgroundCopy
            challengesCopy
            conclusionCopy
            resultsCopy
            solutionCopy
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
                <CaseStudy caseStudy={caseStudy} key={caseStudy.id} index={index} onToggle={() => toggleCaseStudy(caseStudy.id)} active={isActive === caseStudy.id}/>
              ))}
          </div>
        </div>
    );
}

export default Portfolio;