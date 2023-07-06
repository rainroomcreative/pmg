import React from "react";
import JetiLogo from "./images/Jeti.svg";
import OrderAILogo from "./images/OrderAI.svg";
import BellAirLogo from "./images/BellAir.svg";
import MightyTrueLogo from "./images/MightyTrue.svg";
import RealityAILogo from "./images/RealityAI.svg";
import tesla from './images/tesla.svg';
import HR from './images/HungerRush.svg';
import appgate from './images/appgate.svg'
import payroc from './images/Payroc.svg'
import PB from './images/PB.svg'
import personna from './images/Personna.svg'
import studio from './images/studio.svg'

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
        <div className="bg-blue h-80 flex flex-col justify-center items-center gap-10 md:h-36">
            <div className="overflow-x-scroll w-screen hide-scroll md:flex md:flex-col md:justify-center md:items-center">
                <div className="flex flex-row justify-between items-center gap-12 h-12 w-max px-6 animate-scrollRight md:animate-none" style={scrollStyle}>
                    <img src={JetiLogo} alt="Jeti logo" className="w-1/6 h-7" />
                    <img src={OrderAILogo} alt="Order AI logo" className="w-1/6 h-8" />
                    <img src={BellAirLogo} alt="Bell Air logo" className="w-1/6 h-12" />
                    <img src={MightyTrueLogo} alt="Mighty & True logo" className="w-1/6 h-4" />
                    <img src={tesla} alt="Tesla logo" className="w-1/6 h-20" />
                    <img src={HR} alt="Hunger Rush logo" className="w-1/6 h-36" />
                    <img src={appgate} alt="Hunger Rush logo" className="w-1/6 h-36" />
                    <img src={payroc} alt="Hunger Rush logo" className="w-1/6 h-24" />
                    <img src={PB} alt="Hunger Rush logo" className="w-1/6 h-36" />
                    <img src={personna} alt="Hunger Rush logo" className="w-1/6 h-44" />
                    <img src={studio} alt="Hunger Rush logo" className="w-1/6 h-36" />
                    <img src={RealityAILogo} alt="Reality AI logo" className="w-1/6 h-8" />
                </div>
            </div>
            <div className="overflow-x-scroll w-screen hide-scroll md:hidden">
                <div className="flex flex-row justify-between items-center gap-12 h-12 w-max px-6 -translate-x-96 animate-scrollLeft" style={scrollStyle}>
                    <img src={JetiLogo} alt="Jeti logo" className="w-1/6 h-7" />
                    <img src={OrderAILogo} alt="Order AI logo" className="w-1/6 h-8" />
                    <img src={BellAirLogo} alt="Bell Air logo" className="w-1/6 h-12" />
                    <img src={MightyTrueLogo} alt="Mighty & True logo" className="w-1/6 h-4" />
                    <img src={tesla} alt="Tesla logo" className="w-1/6 h-20" />
                    <img src={HR} alt="Hunger Rush logo" className="w-1/6 h-36" />
                    <img src={appgate} alt="Hunger Rush logo" className="w-1/6 h-36" />
                    <img src={RealityAILogo} alt="Reality AI logo" className="w-1/6 h-8" />
                </div>
            </div>
        </div>
    )
}

export default LogoBanner;