import React, {useState, useEffect} from "react";

const CaseStudy = ({ caseStudy, index }) => {
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

    return (
        <div className={"w-full py-24" + `${ isEven ? " bg-blue text-white" : " bg-white text-black"}`}>
            <div className={"container mx-auto flex flex-col items-center md:justify-between " + `${ isEven ? " md:flex-row" : " md:flex-row-reverse"}`}>
                <div className="w-full md:w-1/2">
                    <img src={caseStudy.logo.url} alt={caseStudy.companyName} />
                </div>
                <div className="w-full md:w-1/2 text-left flex flex-col gap-6">
                    <h2 className="text-5xl">{caseStudy.companyName}</h2>
                    <p className="text-base leading-8">{caseStudy.description}</p>
                    <div className="flex flex-row">
                        <div className="w-1/3">
                            <p>{caseStudy.statistic1}</p>
                            <p></p>
                        </div>
                        <div className="w-1/3">
                            <p>{caseStudy.statistic2}</p>
                            <p></p>
                        </div>
                        <div className="w-1/3">
                            <p>{caseStudy.statistic3}</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy;