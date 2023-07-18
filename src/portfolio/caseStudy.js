import React, {useState, useEffect} from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import {ReactComponent as Chart} from './images/chart.svg';

const CaseStudy = ({ caseStudy, index, onToggle, active }) => {
    const [isEven, setIsEven] = useState(false);
    const [tabActive, setTabActive] = useState("1");
    
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

    const changeTab = (id) => {
        setTabActive(id);
    }

    function handleMonth(stat, id) {
        let moIndex = stat.indexOf('/mo');
        let statWOut = stat.slice(0, moIndex);
        let month = '<span style="font-size: 14px;">/mo</span>';
        let statWith = statWOut + month;
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = statWith;
        }
    }

    console.log('logo', caseStudy.logoWhite.url);
    return (
        <div className={"w-full min-h-screen px-6 pt-12 pb-24 flex flex-col items-center justify-center lg:pt-24 lg:sticky top-0 caseStudy" + `${ isEven ? " bg-blue text-white" : " bg-grid-lines bg-cover bg-fixed text-black"}` + `${active ? " active" : ""}`} style={{zIndex: {index} + 100}}>
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true" className="w-full">
                <div className={"container mx-auto w-full flex flex-col items-center md:gap-28 md:justify-between" + `${ isEven ? " md:flex-row" : " md:flex-row-reverse"}`}>
                    <div className="w-full flex justify-center items-center px-6 pb-12 lg:w-1/2">
                        {!!caseStudy.logoWhite && !!caseStudy.logoBlack && (
                        <img src={isEven ? caseStudy.logoWhite.url : caseStudy.logoBlack.url} alt={caseStudy.companyName} />
                        )}
                    </div>
                    <div className="w-full lg:w-1/2 text-left flex flex-col gap-6 font-bold">
                        <h2 className="text-5xl pointer-events-none">{caseStudy.companyName}</h2>
                        <div className="flex flex-row gap-4 flex-wrap">
                            <p className={"text-sm md:text-base cursor-pointer p-1 border-b-solid" + `${ tabActive === '1' ? " border-b" : ""}` + `${ isEven ? " border-b-white" : " border-b-black"}`} onClick={() => changeTab('1')}>Background</p>
                            <p className={"text-sm md:text-base cursor-pointer p-1 border-b-solid" + `${ tabActive === '2' ? " border-b" : ""}` + `${ isEven ? " border-b-white" : " border-b-black"}`} onClick={() => changeTab('2')}>Challenges</p>
                            <p className={"text-sm md:text-base cursor-pointer p-1 border-b-solid" + `${ tabActive === '3' ? " border-b" : ""}` + `${ isEven ? " border-b-white" : " border-b-black"}`} onClick={() => changeTab('3')}>Solution</p>
                            <p className={"text-sm md:text-base cursor-pointer p-1 border-b-solid" + `${ tabActive === '4' ? " border-b" : ""}` + `${ isEven ? " border-b-white" : " border-b-black"}`} onClick={() => changeTab('4')}>Results</p>
                            <p className={"text-sm md:text-base cursor-pointer p-1 border-b-solid" + `${ tabActive === '5' ? " border-b" : ""}` + `${ isEven ? " border-b-white" : " border-b-black"}`} onClick={() => changeTab('5')}>Conclusion</p>
                        </div>
                        <div className="relative h-96 text-base leading-8">
                            <p className={"pointer-events-none absolute top left transition-opacity duration-1000" + `${ tabActive === '1' ? " opacity-100" : " opacity-0"}`}>{caseStudy.backgroundCopy}</p>
                            <p className={"pointer-events-none absolute top left transition-opacity duration-1000" + `${ tabActive === '2' ? " opacity-100" : " opacity-0"}`}>{caseStudy.challengesCopy}</p>
                            <p className={"pointer-events-none absolute top left transition-opacity duration-1000" + `${ tabActive === '3' ? " opacity-100" : " opacity-0"}`}>{caseStudy.solutionCopy}</p>
                            <p className={"pointer-events-none absolute top left transition-opacity duration-1000" + `${ tabActive === '4' ? " opacity-100" : " opacity-0"}`}>{caseStudy.resultsCopy}</p>
                            <p className={"pointer-events-none absolute top left transition-opacity duration-1000" + `${ tabActive === '5' ? " opacity-100" : " opacity-0"}`}>{caseStudy.conclusionCopy}</p>
                        </div>
                        <div className="flex flex-row gap-5 justify-between items-start text-center">
                            <div className="w-1/3 gap-2 flex flex-column items-center justify-center">
                                <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce="true">
                                    <p className="text-3xl pointer-events-none" id={caseStudy.companyName + '-statisticNumber1'}>{
                                        !!(caseStudy.statisticNumber1) ? (
                                            caseStudy.statisticNumber1.includes('/mo') ?
                                            handleMonth(caseStudy.statisticNumber1, caseStudy.companyName + '-statisticNumber1')
                                            : caseStudy.statisticNumber1
                                        )
                                        :(
                                            !!(caseStudy.statisticText1) ? 
                                            <Chart />
                                            : null
                                        )
                                    }</p>
                                    {!!(caseStudy.statisticText1) ?
                                        <p className="text-sm font-normal pointer-events-none">{caseStudy.statisticText1}</p>
                                    : null }
                                </ScrollAnimation>
                            </div>
                            <div className="w-1/3 gap-2 flex flex-column items-center justify-center">
                                <ScrollAnimation animateIn="fadeInUp" delay={1000} animateOnce="true">
                                        <p className="text-3xl pointer-events-none" id={caseStudy.companyName + '-statisticNumber2'}>{
                                            !!(caseStudy.statisticNumber2) ? (
                                                caseStudy.statisticNumber2.includes('/mo') ?
                                                handleMonth(caseStudy.statisticNumber2, caseStudy.companyName + '-statisticNumber2')
                                                : caseStudy.statisticNumber2
                                            )
                                            : (
                                                !!(caseStudy.statisticText2) ? 
                                                <Chart />
                                                : null
                                            )
                                        }</p>
                                    {!!(caseStudy.statisticText2) ?
                                        <p className="text-sm font-normal pointer-events-none">{caseStudy.statisticText2}</p>
                                    : null }
                                </ScrollAnimation>
                            </div>
                            <div className="w-1/3 gap-2 flex flex-column items-center justify-center">
                                <ScrollAnimation animateIn="fadeInUp" delay={1500} animateOnce="true">
                                    <p className="text-3xl pointer-events-none" id={caseStudy.companyName + '-statisticNumber3'}>{
                                        !!(caseStudy.statisticNumber3) ? 
                                        (
                                            caseStudy.statisticNumber3.includes('/mo') ? 
                                            handleMonth(caseStudy.statisticNumber3, caseStudy.companyName + '-statisticNumber3')
                                            : caseStudy.statisticNumber3
                                        )
                                        : (
                                            !!(caseStudy.statisticText3) ? 
                                            <Chart />
                                            : null
                                        )
                                    }</p>
                                    {!!(caseStudy.statisticText3) ?
                                    <p className="text-sm font-normal pointer-events-none">{caseStudy.statisticText3}</p>
                                    : null }
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