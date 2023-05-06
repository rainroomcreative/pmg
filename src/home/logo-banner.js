import React from "react";
import JetiLogo from "./images/Jeti.svg";
import OrderAILogo from "./images/OrderAI.svg";
import BellAirLogo from "./images/BellAir.svg";
import MightyTrueLogo from "./images/MightyTrue.svg";
import RealityAILogo from "./images/RealityAI.svg";



const LogoBanner = () => {
    const scrollStyle = {
        animationPlayState: 'paused',
        animationDelay: 'calc(var(--scroll) * -1s)'
    }

    window.addEventListener("scroll", () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    });


    return (
        <div className="bg-blue w-screen h-80 flex flex-col justify-center items-center gap-10 md:h-36">
            <div className="overflow-x-scroll w-screen hide-scroll md:flex md:flex-col md:justify-center md:items-center">
                <div className="flex flex-row justify-between items-center gap-12 h-12 w-max px-6 animate-scrollRight md:animate-none" style={scrollStyle}>
                    <img src={JetiLogo} alt="Jeti logo" className="w-1/6 h-7" />
                    <img src={OrderAILogo} alt="Order AI logo" className="w-1/6 h-8" />
                    <img src={BellAirLogo} alt="Bell Air logo" className="w-1/6 h-12" />
                    <img src={MightyTrueLogo} alt="Mighty & True logo" className="w-1/6 h-4" />
                    <img src={RealityAILogo} alt="Reality AI logo" className="w-1/6 h-8" />
                </div>
            </div>
            <div className="overflow-x-scroll w-screen hide-scroll md:hidden">
                <div className="flex flex-row justify-between items-center gap-12 h-12 w-max px-6 -translate-x-96 animate-scrollLeft" style={scrollStyle}>
                    <img src={JetiLogo} alt="Jeti logo" className="w-1/6 h-7" />
                    <img src={OrderAILogo} alt="Order AI logo" className="w-1/6 h-8" />
                    <img src={BellAirLogo} alt="Bell Air logo" className="w-1/6 h-12" />
                    <img src={MightyTrueLogo} alt="Mighty & True logo" className="w-1/6 h-4" />
                    <img src={RealityAILogo} alt="Reality AI logo" className="w-1/6 h-8" />
                </div>
            </div>
        </div>
    )
}

export default LogoBanner;