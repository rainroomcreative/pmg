import React, {useState, useEffect} from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const CaseStudy = ({ caseStudy, index, onToggle, active }) => {
    const [isEven, setIsEven] = useState(false);

    
    useEffect(() => {
        const isEven = () => {
            console.log('checking index', index)
            if (index % 2 === 0) {
                setIsEven(true);
                console.log('isEven', isEven)
            }
        } 
        isEven();
    }, []);

    function handleMonth(stat, id) {
        let moIndex = stat.indexOf('/mo');
        let statWOut = stat.slice(0, moIndex);
        let month = '<span style="font-size: 14px;">/mo</span>';
        let statWith = statWOut + month;
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = statWith;
        }
    }

    return (
        <div className={"w-full min-h-screen px-6 pt-12 pb-24 lg:pt-24 lg:sticky top-0 caseStudy" + `${ isEven ? " bg-blue text-white" : " bg-grid-lines bg-cover bg-fixed text-black"}` + `${active ? " active" : ""}`} style={{zIndex: {index} + 100}}>
            <ScrollAnimation animateIn="fadeInUp">
                <div className={"container mx-auto flex flex-col items-center md:gap-28 md:justify-between" + `${ isEven ? " md:flex-row" : " md:flex-row-reverse"}`}>
                    <div className="w-full lg:w-1/2">
                        <img src={isEven ? caseStudy.logoWhite.url : caseStudy.logoBlack.url} alt={caseStudy.companyName} />
                    </div>
                    <div className="w-full lg:w-1/2 text-left flex flex-col gap-6 font-bold">
                        <h2 className="text-5xl pointer-events-none">{caseStudy.companyName}</h2>
                        <div className="relative">
                            <p className="text-base leading-8 caseStudy-description hide-scroll pointer-events-none">{caseStudy.description}</p>
                            <div className={"w-full top-0 flex flex-col justify-end items-center pb-1" + `${ isEven ? " bg-blueFade" : " bg-whiteFade2"}` + `${ active ? " remove-bg" : " absolute h-full"}`}>
                                <p className="text-base font-normal cursor-pointer hover:text-gold" onClick={onToggle}>{active ? "Show Less" : "Show More"}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 justify-between items-start text-center">
                            <div className="w-1/3 gap-2 flex flex-column">
                                <ScrollAnimation animateIn="fadeInUp" delay={500}>
                                    <p className="text-3xl pointer-events-none" id={caseStudy.companyName + '-statisticNumber1'}>{caseStudy.statisticNumber1.includes('/mo') ? handleMonth(caseStudy.statisticNumber1, caseStudy.companyName + '-statisticNumber1') : caseStudy.statisticNumber1}</p>
                                    <p className="text-sm font-normal pointer-events-none">{caseStudy.statisticText1}</p>
                                </ScrollAnimation>
                            </div>
                            <div className="w-1/3 gap-2 flex flex-column">
                                <ScrollAnimation animateIn="fadeInUp" delay={1000}>
                                    <p className="text-3xl pointer-events-none" id={caseStudy.companyName + '-statisticNumber2'}>{caseStudy.statisticNumber2.includes('/mo') ? handleMonth(caseStudy.statisticNumber2, caseStudy.companyName + '-statisticNumber2') : caseStudy.statisticNumber2}</p>
                                    <p className="text-sm font-normal pointer-events-none">{caseStudy.statisticText2}</p>
                                </ScrollAnimation>
                            </div>
                            <div className="w-1/3 gap-2 flex flex-column">
                                <ScrollAnimation animateIn="fadeInUp" delay={1500}>
                                    <p className="text-3xl pointer-events-none" id={caseStudy.companyName + '-statisticNumber3'}>{caseStudy.statisticNumber3.includes('/mo') ? handleMonth(caseStudy.statisticNumber3, caseStudy.companyName + '-statisticNumber3') : caseStudy.statisticNumber3}</p>
                                    <p className="text-sm font-normal pointer-events-none">{caseStudy.statisticText3}</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default CaseStudy;