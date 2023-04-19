import React from "react";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxController } from 'parallax-controller';
import Hourglass from "./images/Hourglass_White_2.svg";
import Lightbulb from "./images/Lightbulb_White_2.svg";
import Money1 from "./images/Money_White_2.svg";
import Money2 from "./images/Money_White_3.svg";
import Money3 from "./images/Money_White_4.svg";
import Gears1 from "./images/Gears_White_2.svg";
import Gears2 from "./images/Gears_White_3.svg";

const Value = () => {
    return (
        
        <div className="w-screen px-6" >
            
                <div className="hidden md:flex flex-row relative h-auto">
                    <div className="sticky top-0 self-start h-screen flex flex-col justify-center items centerborder-l border-l-white border-l-solid sticky-element">
                        <h3 className="pl-2.5" data-name="hourglass">01</h3>
                        <h3 className="pl-2.5" data-name="money">02</h3>
                        <h3 className="pl-2.5" data-name="lightbulb">03</h3>
                        <h3 className="pl-2.5" data-name="gears">04</h3>
                    </div>
                    <div className="w-full" id="valueScrollController">
                        {/* ANCHOR Desktop Hourglass */}
                        <div className="h-screen w-fullflex flex-row">
                            <div className="flex flex-col justify-center items-start hourglass h-full bg-red-500">
                                <h3 className="text-3xl">Get your time back</h3>
                                <p className="text-base leading-8 mt-7">We specialize in taking the burden of inefficient and repetitive tasks off your plate and lets you focus your valuable time on what matters most - your business.</p>
                            </div>
                            <div className="mx-auto bg-hourglass bg-bottom bg-no-repeat bg-contain hourglass h-full relative">
                                <Parallax translateY={[15, -20]}>
                                    <img src={Hourglass} alt="Get your time back" className="mx-auto" />
                                </Parallax>
                            </div>
                        </div>

                        {/* ANCHOR Desktop Money */}
                        <div className="h-screen w-full flex flex-row">
                            <div className="flex flex-col justify-center items-start money h-full ">
                                <h3 className="text-3xl">Maximize Your Profits</h3>
                                <p className="text-base leading-8 mt-7">Cut expenses and maximize profits by making the most of your company’s time and resources. Our cost-effective services are custom tailored to fit your budget, so you can get the help you need without breaking the bank.</p>
                                <a href="/portfolio" className="w-full mt-5 bg-transparent border border-solid border-white text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See Case Studies</a>
                            </div>
                            <div className="mx-auto bg-money bg-no-repeat bg-contain w-full money h-full relative">
                                <Parallax translateY={[25, -70]} className="absolute top-4 z-20">
                                    <img src={Money3} alt="Get your time back" className="mx-auto" />
                                </Parallax>
                                <Parallax translateY={[20, -50]} className="absolute top-4 z-10">
                                    <img src={Money2} alt="Get your time back" className="mx-auto" />
                                </Parallax>
                                <Parallax translateY={[0, -30]} className="absolute top-12 z-0">
                                    <img src={Money1} alt="Get your time back" className="mx-auto" />
                                </Parallax>
                            </div>
                        </div>

                        {/* ANCHOR Desktop Lightbulb */}
                        <div className="h-screen w-full flex flex-row">
                            <div className="flex flex-col justify-center items-start h-full lightbulb ">
                                <h3 className="text-3xl">Work Smarter</h3>
                                <p className="text-base leading-8 mt-7">We specialize in taking the burden of inefficient and repetitive tasks off your plate and lets you focus your valuable time on what matters most - your business.</p>
                            </div>
                            <div className="mx-auto bg-lightbulb bg-bottom bg-no-repeat bg-contain h-full lightbulb  relative">
                                <Parallax translateY={[15, -20]}>
                                    <img src={Lightbulb} alt="Lightbulb" className="mx-auto" />
                                </Parallax>
                            </div>
                        </div>

                        {/* ANCHOR Desktop Gears */}
                        <div className="h-screen w-full flex flex-row">
                            <div className="flex flex-col justify-center items-start h-full gears ">
                                <h3 className="text-3xl">Access Industry Professionals</h3>
                                <p className="text-base leading-8 mt-7">In addition to fractional project management, our team has experience in design, web development, and marketing - giving you access to a diverse range of tools and skillsets.</p>
                                <a href="/services" className="w-full mt-5 bg-transparent border border-solid border-white text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See our Services</a>
                            </div>
                            <div className="mx-auto bg-gears bg-no-repeat bg-contain w-full h-full gears  relative">
                                <Parallax translateY={[-50, 25]} className="absolute top-4 z-10">
                                    <img src={Gears2} alt="Gears" className="mx-auto" />
                                </Parallax>
                                <Parallax translateY={[-30, 0 ]} className="absolute top-20 z-0">
                                    <img src={Gears1} alt="Gears" className="mx-auto" />
                                </Parallax>
                            </div>
                        </div>
                    </div>
                </div>
                
            <div className="font-bold text-blue text-left flex gap-36 flex-col justify-between items-center w-full md:h-full md:flex-row md:container md:gap-4">
                {/* MOBILE STYLES */}
                <div className="flex flex-col justify-end items-center min-h-screen relative md:hidden">
                    <div className="mx-auto bg-hourglass bg-bottom bg-no-repeat bg-contain w-full absolute top-0 z-0">
                        <Parallax translateY={[-20, 15]}>
                            <img src={Hourglass} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                        <div className="bg-whiteFade h-72 w-full absolute bottom-0"></div>
                    </div>
                    <div className="flex flex-col justify-end items-start h-full z-10">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">01</h2>
                        <h3 className="text-3xl">Get your time back</h3>
                        <p className="text-base leading-8 mt-7">We specialize in taking the burden of inefficient and repetitive tasks off your plate and lets you focus your valuable time on what matters most - your business.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center relative min-h-screen snap-always snap-center md:hidden">
                    <div className="mx-auto bg-money bg-no-repeat bg-contain w-full max-h-full absolute top-0 z-0" style={{height: 510 + 'px'}}>
                        <Parallax translateY={[-70,  25]} className="absolute top-4 z-20">
                            <img src={Money3} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                        <Parallax translateY={[-50, 20]} className="absolute top-4 z-10">
                            <img src={Money2} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                        <Parallax translateY={[-30, 0 ]} className="absolute top-12 z-0">
                            <img src={Money1} alt="Get your time back" className="mx-auto" />
                        </Parallax>
                        <div className="bg-whiteFade h-72 w-full absolute bottom-0"></div>
                    </div>
                    <div className="flex flex-col justify-end items-start h-full z-30 pt-80">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">02</h2>
                        <h3 className="text-3xl">Maximize Your Profits</h3>
                        <p className="text-base leading-8 mt-7">Cut expenses and maximize profits by making the most of your company’s time and resources. Our cost-effective services are custom tailored to fit your budget, so you can get the help you need without breaking the bank.</p>
                        <a href="/portfolio" className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See Case Studies</a>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center min-h-screen relative snap-always snap-center md:hidden">
                    <div className="mx-auto bg-lightbulb bg-bottom bg-no-repeat bg-contain w-full absolute top-0 z-0">
                        <Parallax translateY={[-20, 15 ]}>
                            <img src={Lightbulb} alt="Lightbulb" className="mx-auto" />
                        </Parallax>
                        <div className="bg-whiteFade h-72 w-full absolute bottom-0"></div>
                    </div>
                    <div className="flex flex-col justify-end items-start h-full z-10">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">03</h2>
                        <h3 className="text-3xl">Work Smarter</h3>
                        <p className="text-base leading-8 mt-7">We specialize in taking the burden of inefficient and repetitive tasks off your plate and lets you focus your valuable time on what matters most - your business.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center relative min-h-screen snap-always snap-center md:hidden">
                    <div className="mx-auto bg-gears bg-no-repeat bg-contain w-full max-h-full absolute top-0 z-0" style={{height: 510 + 'px'}}>
                        <Parallax translateY={[25, -50]} className="absolute top-4 z-10">
                            <img src={Gears2} alt="Gears" className="mx-auto" />
                        </Parallax>
                        <Parallax translateY={[0, -30]} className="absolute top-20 z-0">
                            <img src={Gears1} alt="Gears" className="mx-auto" />
                        </Parallax>
                        <div className="bg-whiteFade h-72 w-full absolute bottom-0"></div>
                    </div>
                    <div className="flex flex-col justify-end items-start h-full z-20 pt-80">
                        <h2 className="text-5xl leading-loose border-b border-b-blue border-b-solid mb-5">04</h2>
                        <h3 className="text-3xl">Access Industry Professionals</h3>
                        <p className="text-base leading-8 mt-7">In addition to fractional project management, our team has experience in design, web development, and marketing - giving you access to a diverse range of tools and skillsets.</p>
                        <a href="/services" className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">See our Services</a>
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