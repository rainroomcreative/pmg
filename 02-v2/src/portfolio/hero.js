import React from 'react';
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <div className="container mx-auto w-full flex flex-col justify-center items-between py-24 gap-24 px-6">
            <div className="text-blue text-left font-bold flex flex-col gap-9 w-full">
                <h1 className="text-5xl pointer-events-none">Proven Success</h1>
                <p className="text-base leading-8 pointer-events-none">Project Management Groups has a proven track record of success when it comes to project management consulting. Our team of seasoned professionals brings years of experience to the table, allowing us to deliver top-notch services to our clients. We've worked with businesses of all sizes across various industries, and have helped them achieve their goals and objectives through effective project management. We take pride in our ability to consistently exceed client expectations, delivering high-quality services that are tailored to their specific needs.</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center text-blue lg:text-white font-bold container mx-auto gap-12">
                <div className="w-full lg:w-1/4 lg:bg-blue rounded-3xl p-6">
                        <CountUp
                        start={0}
                        end={50}
                        duration={1.5}
                        suffix="%"
                        >
                            {({ countUpRef, start }) => (
                                <h3 className="text-3xl xl:text-5xl pointer-events-none" ref={countUpRef} onLoad={start}></h3>                                
                            )}
                        </CountUp>
                    <h4 className="text-sm mt-6 pointer-events-none">Cheaper than competitors.</h4>
                </div>
                <div className="w-full lg:w-1/4 lg:bg-blue rounded-3xl p-6">
                    <CountUp
                    start={0}
                    end={1.2}
                    delay={1.5}
                    duration={1.5}
                    decimals={1}
                    decimal="."
                    prefix="$"
                    suffix="M"
                    >
                        {({ countUpRef, start }) => (
                            <h3 className="text-3xl xl:text-5xl pointer-events-none" ref={countUpRef} onLoad={start}></h3>                                
                        )}
                    </CountUp>
                    <h4 className="text-sm mt-6 pointer-events-none">Managed Projects </h4>
                </div>
                <div className="w-full lg:w-1/4 lg:bg-blue rounded-3xl p-6">
                    <CountUp
                        start={0}
                        end={2000}
                        delay={3}
                        duration={1.5}
                        >
                            {({ countUpRef, start }) => (
                                <h3 className="text-3xl xl:text-5xl pointer-events-none" ref={countUpRef} onLoad={start}></h3>                                
                            )}
                    </CountUp>
                    <h4 className="text-sm mt-6 pointer-events-none">Client hours saved</h4>
                </div>
                <div className="w-full lg:w-1/4 lg:bg-blue rounded-3xl p-6">
                    <CountUp
                        start={0}
                        end={300}
                        delay={4.5}
                        duration={1.5}
                        prefix="$"
                        suffix="k+"
                        >
                            {({ countUpRef, start }) => (
                                <h3 className="text-3xl xl:text-5xl pointer-events-none" ref={countUpRef} onLoad={start}></h3>                                
                            )}
                    </CountUp>
                    <h4 className="text-sm mt-6 pointer-events-none">Saved in our clients expenses</h4>
                </div>
            </div>
        </div>
    )
}

export default Hero;
