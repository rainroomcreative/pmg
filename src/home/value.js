import React from "react";
import { useState } from "react";
import { Parallax } from 'react-scroll-parallax';
import {Link} from "react-router-dom";
import Hourglass from "./images/Hourglass_White_2.png";
import Lightbulb from "./images/Lightbulb_White_2.png";
import Money1 from "./images/Money_White_2.png";
import Money2 from "./images/Money_White_3.png";
import Money3 from "./images/Money_White_4.png";
import Gears1 from "./images/Gears_White_2.png";
import Gears2 from "./images/Gears_White_3.png";
import { useInView, InView } from 'react-intersection-observer';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import { motion } from 'framer-motion'

const Value = () => {

    var progressNumbers = [false, false, false, false]
    const [progress, setProgress] = useState(progressNumbers)

    const handleProgress = (setIndex) => {
        setProgress(progress.map((value, index) => {
            return index == setIndex  
        }))
    }

    

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    
    return (
        
        <div className="w-screen snap-start" >
                <ScrollSync>
                    
                    <div className="hidden md:flex flex-row sticky top-0 h-auto mb-32">
                    {/* <div className="absolute top-0 left-0 calc-sticky-blue-wrap-size">
                        <div className="bg-blue w-full sticky rounded-e-2xl top-0 calc-sticky-blue-size"></div>
                    </div> */}
                    <ScrollSyncPane>
                    <div className="w-1/2  max-h-[700px] overflow-scroll hide-scroll bg-blue flex flex-row snap-y snap-mandatory rounded-e-[20px]" id="valueScrollController">
                        <div className="sticky top-[270px] self-start  flex flex-col justify-center items centerborder-l border-l-white border-l-solid sticky-element w-52 pl-8 text-left">
                            <h3 className={`pl-4 border-l border-white text-white prog-numbers ${ progress[0] ? "show" : ""}`} data-name="hourglass">01</h3>
                            <h3 className={`pl-4 border-l border-white text-white prog-numbers ${ progress[1] ? "show" : ""}`} data-name="money">02</h3>
                            <h3 className={`pl-4 border-l border-white text-white prog-numbers ${ progress[2] ? "show" : ""}`} data-name="lightbulb">03</h3>
                            <h3 className={`pl-4 border-l border-white text-white prog-numbers ${ progress[3] ? "show" : ""}`} data-name="gears">04</h3>
                        </div>
                        {/* ANCHOR Desktop Hourglass */}
                        <div className="snap-y snap-mandatory">
                            <InView as="div" threshold={.8} onChange={(inView, entry) => inView ? handleProgress(0) : console.log("not in view")} className="snap-start max-width-parallax flex flex-col justify-center items-start hourglass h-full bg-red-500 basis-9/12 flex-1 pl-8 pr-8 text-left text-white value-text-box">
                                <h3 className="text-3xl font-bold pointer-events-none">Get your time back</h3>
                                <p className="text-base leading-8 mt-7 pointer-events-none">We specialize in taking the burden of time consuming and repetitive tasks off your plate which lets you focus your valuable time on what matters most - your business.</p>
                            </InView>
                            <InView as="div" threshold={.8} onChange={(inView, entry) => inView ? handleProgress(1) : console.log("not in view")} className="snap-start max-width-parallax flex flex-col justify-center items-start money h-full basis-full flex-1 pl-8 pr-8 text-left text-white value-text-box">
                                <h3 className="text-3xl font-bold pointer-events-none">Maximize Your Profits</h3>
                                <p className="text-base leading-8 mt-7 pointer-events-none">Cut expenses and maximize profits by making the most of your company’s time and resources. Our cost-effective services are custom tailored to fit your budget, so you can get the help you need without breaking the bank.</p>
                                <Link to="/portfolio" className="w-full mt-5 bg-transparent border border-solid border-white text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See Case Studies</Link>
                            </InView>
                            <InView as="div" threshold={.8} onChange={(inView, entry) => inView ? handleProgress(2) : console.log("not in view")}  className="snap-start max-width-parallax flex flex-col justify-center items-start h-full lightbulb basis-full flex-1 pl-8 pr-8 text-left text-white value-text-box">
                                <h3 className="text-3xl font-bold pointer-events-none">Work Smarter</h3>
                                <p className="text-base leading-8 mt-7 pointer-events-none">PMG has developed a unique approach that streamlines project management, so you can achieve better results in less time. Our team of experienced project managers has the expertise to handle complex projects, ensuring that they are completed on time, within budget, and to the highest standards. With our work smarter philosophy, you can focus on growing your business while we take care of the rest.</p>
                            </InView>
                            <InView as="div" threshold={.8} onChange={(inView, entry) => inView ? handleProgress(3) : console.log("not in view")}  className="snap-start max-width-parallax flex flex-col justify-center items-start h-full gears basis-full flex-1 pl-8 pr-8 text-left text-white value-text-box">
                                <h3 className="text-3xl font-bold pointer-events-none">Access Industry Professionals</h3>
                                <p className="text-base leading-8 mt-7 pointer-events-none">Our team brings a wealth of expertise to our clients, not just in fractional project management, but also in areas such as design, web development, and marketing. This means that you'll have access to a broad range of skills and tools that can help drive the success of your projects.</p>
                                <Link to="/services" className="w-full mt-5 bg-transparent border border-solid border-white text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See our Services</Link>
                            </InView>
                        </div>
                    </div>
                    </ScrollSyncPane>
                    <ScrollSyncPane>
                        <div className="w-1/2 max-h-[700px] overflow-scroll hide-scroll snap-y rounded-e-[20px]">
                            {/* ANCHOR Desktop Hourglass */}
                            <div className="h-full relative flex justify-center items-center overflow-hidden">
                                <motion.img src={Hourglass} alt="Get your time back" className="mx-auto absolute top-0 z-[10]" animate={{ y: progress[0] ? 100 : -50}} transition={{duration: 2, delay: .2, ease: "easeInOut"}} />
                                <div className="pedestal-gradient ">
                                    <div className="bg-hourglass bg-bottom bg-no-repeat bg-contain hourglass w-[540px] h-[540px] relative basis-full flex-1 flex flex-column justify-center max-width-parallax ">
                                    
                                    </div>
                                </div>
                            </div>

                            {/* ANCHOR Desktop Money */}
                            <div className="h-full relative flex justify-center items-center overflow-hidden">
                                <motion.img src={Money1} alt="Money" className="mx-auto absolute top-0 z-[10]" animate={{ y: progress[1] ?  50 : 0 }} transition={{duration: 2, delay: .2, ease: "easeInOut"}}/>
                                <motion.img src={Money2} alt="Money" className="mx-auto absolute top-0 z-[11]" animate={{ y: progress[1] ?  50 :-50 }} transition={{duration: 2, delay: .4, ease: "easeInOut"}}/>
                                <motion.img src={Money3} alt="Money" className="mx-auto absolute top-0 z-[12]" animate={{ y: progress[1] ?  50 : -100 }} transition={{duration: 2, delay: .6, ease: "easeInOut"}}/>
                                <div className="pedestal-gradient ">
                                    <div className="bg-money bg-bottom bg-no-repeat bg-contain hourglass w-[540px] h-[540px] relative basis-full flex-1 flex flex-column justify-center max-width-parallax ">
                                        
                                    </div>
                                </div>
                            </div>

                            

                            {/* ANCHOR Desktop Lightbulb */}
                            <div className="h-full relative flex justify-center items-center overflow-hidden">
                                <motion.img src={Lightbulb} alt="Lightbulb" className="mx-auto absolute top-0 z-[10]" animate={{ y: progress[2] ?  100 :50}} transition={{duration: 2, delay: .2, ease: "easeInOut"}}/>

                                <div className="pedestal-gradient ">
                                    <div className="bg-lightbulb bg-bottom bg-no-repeat bg-contain hourglass w-[540px] h-[540px] relative basis-full flex-1 flex flex-column justify-center max-width-parallax ">
                                    
                                    </div>
                                </div>
                            </div>
                            

                            {/* ANCHOR Desktop Gears */}
                            <div className="h-full relative flex justify-center items-center overflow-hidden">
                                <motion.img src={Gears2} alt="Gears" className="mx-auto absolute top-0 z-[12]" animate={{ y: progress[3] ?  70 :20 }} transition={{duration: 2.25, delay: .2}}/>
                                <motion.img src={Gears1} alt="Gears" className="mx-auto absolute top-0 z-[11]" animate={{ y: progress[3] ?  100 : 50 }}  transition={{duration: 2, delay: .2}}/>
                                
                                <div className="pedestal-gradient ">
                                    <div className="bg-gears bg-bottom bg-no-repeat bg-contain hourglass w-[540px] h-[540px] relative basis-full flex-1 flex flex-column justify-center max-width-parallax ">
                                    
                                    </div>
                                </div>
                            </div>
                            

                        
                        </div>
                    </ScrollSyncPane>

                        


                        

                        
                    </div>
                    
                </ScrollSync>
                
            <div className="px-6 py-20 font-bold text-blue text-left flex gap-36 flex-col justify-between items-center w-full md:h-full md:flex-row md:container md:gap-4">
                {/* MOBILE STYLES */}
                <div className="flex flex-col py-10 justify-end items-center min-h-screen relative md:hidden snap-always snap-center">
                    <div className="mx-auto bg-hourglass bg-bottom bg-no-repeat max-h-full bg-contain w-full absolute top-0 z-0">
                        <Parallax translateY={[-20, 15]}>
                            <img src={Hourglass} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                    </div>
                    <div className="flex flex-col justify-end items-start h-full z-10 pt-60">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">01</h2>
                        <h3 className="text-3xl">Get your time back</h3>
                        <p className="text-base leading-8 mt-7">We specialize in taking the burden of inefficient and repetitive tasks off your plate and lets you focus your valuable time on what matters most - your business.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-end py-10 items-center relative min-h-screen snap-always snap-center md:hidden">
                    <div className="mx-auto bg-money bg-no-repeat bg-contain w-full max-h-full absolute top-0 z-0" style={{height: 78 + 'vh'}}>
                        <Parallax translateY={[-50,  25]} className="absolute top-4 z-20">
                            <img src={Money3} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                        <Parallax translateY={[-32, 20]} className="absolute top-4 z-10">
                            <img src={Money2} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                        <Parallax translateY={[-24, 0 ]} className="absolute top-12 z-0">
                            <img src={Money1} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                    </div>
                    <div className="relative top-48 pb-48 flex flex-col justify-end items-start h-full z-30 pt-60">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">02</h2>
                        <h3 className="text-3xl">Maximize Your Profits</h3>
                        <p className="text-base leading-8 mt-7">Cut expenses and maximize profits by making the most of your company’s time and resources. Our cost-effective services are custom tailored to fit your budget, so you can get the help you need without breaking the bank.</p>
                        <Link to="/portfolio" className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See Case Studies</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-end py-10 items-center min-h-screen relative snap-always snap-center md:hidden">
                    <div className="mx-auto bg-lightbulb bg-bottom bg-no-repeat  max-h-full bg-contain w-full absolute top-0 z-0">
                        <Parallax translateY={[-20, 15 ]}>
                            <img src={Lightbulb} alt="Lightbulb" className="mx-auto" />
                        </Parallax>
                        <div className=" h-72 w-full absolute bottom-0"></div>
                    </div>
                    <div className="flex flex-col justify-end items-start h-full z-10 pt-60">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">03</h2>
                        <h3 className="text-3xl">Work Smarter</h3>
                        <p className="text-base leading-8 mt-7">We specialize in taking the burden of inefficient and repetitive tasks off your plate and lets you focus your valuable time on what matters most - your business.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-end py-10 items-center relative min-h-screen snap-always snap-center md:hidden">
                    <div className="mx-auto bg-gears bg-no-repeat bg-contain w-full max-h-full absolute top-0 z-0" style={{height: 78 + 'vh'}}>
                        <Parallax translateY={[-50, 25]} className="absolute top-4 z-10">
                            <img src={Gears2} alt="Gears" className="mx-auto" />
                        </Parallax>
                        <Parallax translateY={[-30, 0 ]} className="absolute top-20 z-0">
                            <img src={Gears1} alt="Gears" className="mx-auto" />
                        </Parallax>
                    </div>
                    <div className="relative top-48 pb-48 flex flex-col justify-end items-start h-full z-20 pt-60">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">04</h2>
                        <h3 className="text-3xl">Access Industry Professionals</h3>
                        <p className="text-base leading-8 mt-7">In addition to fractional project management, our team has experience in design, web development, and marketing - giving you access to a diverse range of tools and skillsets.</p>
                        <Link to="/services" className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See our Services</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



// function newScrollInit() {
//     const scrollContainer = document.getElementById('valueScroll');
//     const scrollController = document.getElementById('valueScrollController');
//     const newScroll = ParallaxController.init({
//         scrollAxis: 'vertical',
//         scrollContainer: scrollContainer,
//     });
//     newScroll.updateScrollContainer(scrollController);
// }

export default Value;