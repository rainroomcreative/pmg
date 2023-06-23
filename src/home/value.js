import React from "react";
import { useState } from "react";
import { Parallax } from 'react-scroll-parallax';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Hourglass from "./images/Hourglass_White_2.png";
import Lightbulb from "./images/Lightbulb_White_2.png";
import Money1 from "./images/Money_White_2.png";
import Money2 from "./images/Money_White_3.png";
import Money3 from "./images/Money_White_4.png";
import Gears1 from "./images/Gears_White_2.png";
import Gears2 from "./images/Gears_White_3.png";
import { useInView, InView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

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
            <div className="pr-6 py-20 font-bold text-blue md:relative text-left flex gap-36 flex-col justify-between items-center w-full md:h-full md:gap-4">
                <div className="sticky left-0 top-0 self-start flex-col justify-center items center border-l bg-blue border-l-white border-l-solid sticky-element pl-8 text-left w-1/2 h-screen hidden md:flex rounded-e-[20px] z-0">
                    <HashLink to="/#time">
                        <h3 className={`pl-4 border-l border-white text-white prog-numbers ${ progress[0] ? "show" : ""}`} data-name="hourglass">01</h3>
                    </HashLink>
                    <HashLink to="/#profits">
                        <h3 className={`pl-4 border-l border-white text-white prog-numbers ${ progress[1] ? "show" : ""}`} data-name="money">02</h3>
                    </HashLink>
                    <HashLink to="/#workSmarter">
                        <h3 className={`pl-4 border-l border-white text-white prog-numbers ${ progress[2] ? "show" : ""}`} data-name="lightbulb">03</h3>
                    </HashLink>
                    <HashLink to="/#professionals">
                        <h3 className={`pl-4 border-l border-white text-white prog-numbers ${ progress[3] ? "show" : ""}`} data-name="gears">04</h3>
                    </HashLink>
                </div>
                {/* MOBILE STYLES */}
                <div className="flex flex-col md:flex-row-reverse md:gap-10 py-10 justify-end md:justify-between items-center min-h-screen relative snap-always snap-center z-10">
                    <div className="mx-auto md:mx-0 bg-hourglass bg-bottom bg-center bg-[length:100%] bg-no-repeat max-h-full w-full md:w-1/2 md:max-w-[430px] absolute md:relative top-0 z-0">
                        <Parallax translateY={[-20, 15]}>
                            <img src={Hourglass} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                    </div>
                    <div className="flex flex-col justify-end items-start h-full z-10 md:w-1/2 md:text-white md:px-28">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">01</h2>
                        <h3 className="text-3xl">Get your time back</h3>
                        <p className="text-base leading-8 mt-7">We specialize in taking the burden of inefficient and repetitive tasks off your plate and lets you focus your valuable time on what matters most - your business.</p>
                        <Link to="/portfolio" className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See Case Studies</Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse md:gap-10 justify-end md:justify-between py-10 items-center relative min-h-screen snap-always snap-center z-10">
                    <div className="mx-auto md:mx-0 bg-money bg-no-repeat bg-center bg-[length:100%] w-full md:w-1/2 md:max-w-[430px] max-h-full absolute md:relative top-0 z-0" style={{height: 78 + 'vh'}}>
                        <Parallax translateY={[-45,  25]} className="absolute top-4 z-20">
                            <img src={Money3} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                        <Parallax translateY={[-35, 20]} className="absolute top-4 z-10">
                            <img src={Money2} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                        <Parallax translateY={[-25, 0 ]} className="absolute top-12 z-0">
                            <img src={Money1} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                    </div>
                    <div className="relative top-48 pb-48 flex flex-col justify-end items-start h-full md:w-1/2 z-30 md:text-white md:px-28">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">02</h2>
                        <h3 className="text-3xl">Maximize Your Profits</h3>
                        <p className="text-base leading-8 mt-7">Cut expenses and maximize profits by making the most of your company’s time and resources. Our cost-effective services are custom tailored to fit your budget, so you can get the help you need without breaking the bank.</p>
                        <Link to="/pricing" className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See Pricing</Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse md:gap-10 justify-end md:justify-between py-10 items-center min-h-screen relative snap-always snap-center z-10">
                    <div className="mx-auto md:mx-0 bg-lightbulb bg-bottom bg-center bg-[length:100%] bg-no-repeat max-h-full w-full md:w-1/2 md:max-w-[430px] absolute md:relative top-0 z-0">
                        <Parallax translateY={[-20, 15 ]}>
                            <img src={Lightbulb} alt="Lightbulb" className="mx-auto" />
                        </Parallax>
                        <div className=" h-72 w-full absolute bottom-0"></div>
                    </div>
                    <div className="flex flex-col justify-end items-start h-full md:w-1/2 z-10 md:text-white md:px-28">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">03</h2>
                        <h3 className="text-3xl">Work Smarter</h3>
                        <p className="text-base leading-8 mt-7">We specialize in taking the burden of inefficient and repetitive tasks off your plate and lets you focus your valuable time on what matters most - your business.</p>
                        <a className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48" href="#contact">Learn More</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse md:gap-10 justify-end md:justify-between py-10 items-center relative min-h-screen snap-always snap-center z-10">
                    <div className="mx-auto md:mx-0 bg-gears bg-no-repeat bg-center bg-[length:100%] w-full md:w-1/2 md:max-w-[430px] max-h-full absolute md:relative top-0 z-0" style={{height: 78 + 'vh'}}>
                        <Parallax translateY={[-35, 25]} className="absolute top-4 z-10">
                            <img src={Gears2} alt="Gears" className="mx-auto" />
                        </Parallax>
                        <Parallax translateY={[-20, 0 ]} className="absolute top-20 z-0">
                            <img src={Gears1} alt="Gears" className="mx-auto" />
                        </Parallax>
                    </div>
                    <div className="relative top-48 pb-48 flex flex-col justify-end items-start h-full md:w-1/2 z-20 md:text-white md:px-28">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">04</h2>
                        <h3 className="text-3xl">Access Industry Professionals</h3>
                        <p className="text-base leading-8 mt-7">In addition to fractional project management, our team has experience in design, web development, and marketing - giving you access to a diverse range of tools and skillsets.</p>
                        <Link to="/about" className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See our Team</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Value;