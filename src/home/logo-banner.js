import React from "react";
import { ReactSVG } from "react-svg";
import './logo-banner.css';
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
            <div className="overflow-x-scroll overflow-y-hidden w-screen hide-scroll md:flex md:flex-col md:justify-center md:items-center">
                <div className="flex flex-row justify-between items-center gap-12 h-12 w-max px-6 animate-scrollRight md:animate-none" style={scrollStyle}>
                <div width="144" alt="Jeti logo" className="logo-banner--logo jeti-logo w-1/6 h-7" />
                    <div width="144" alt="Order AI logo" className="logo-banner--logo order-ai-logo w-1/6 h-8" />
                    <div width="144" alt="Bell Air logo" className="logo-banner--logo bellair-logo w-1/6 h-12" />
                    <div width="144" alt="Mighty & True logo" className="logo-banner--logo mighty-true-logo w-1/6 h-4" />
                    <div width="144" alt="Tesla logo" className="logo-banner--logo tesla-logo w-1/6 h-20 med:hidden" />
                    <div width="144" alt="Hunger Rush logo" className="logo-banner--logo hunger-rush-logo w-1/6 h-36 med:hidden" />
                    <div width="144" alt="Appgate logo" className="logo-banner--logo appgate-logo w-1/6 h-36 med:hidden" />
                    <div width="144" alt="Payroc logo" className="logo-banner--logo payroc-logo w-1/6 h-24 med:hidden" />
                    <div width="144" alt="Persona logo" className="logo-banner--logo persona-logo w-1/6 h-36 med:hidden" />
                    <div width="144" alt="Psycho Bunny logo" className="logo-banner--logo psycho-bunny-logo w-1/6 h-8 med:hidden" />
                    <div width="144" alt="Hunger Rush logo" className="logo-banner--logo studio88-logo w-1/6 h-44 med:hidden" />
                    <div width="144" alt="Reality AI logo" className="logo-banner--logo reality-ai-logo w-1/6 h-36" />
                </div>
            </div>
            <div className="overflow-x-scroll overflow-y-hidden w-screen hide-scroll md:hidden">
                <div className="flex flex-row justify-between items-center gap-12 h-12 w-max px-6 -translate-x-[82rem] animate-scrollLeft" style={scrollStyle}>
                    <div width="144" alt="Jeti logo" className="logo-banner--logo jeti-logo w-1/6 h-7" />
                    <div width="144" alt="Order AI logo" className="logo-banner--logo order-ai-logo w-1/6 h-8" />
                    <div width="144" alt="Bell Air logo" className="logo-banner--logo bellair-logo w-1/6 h-12" />
                    <div width="144" alt="Mighty & True logo" className="logo-banner--logo mighty-true-logo w-1/6 h-4" />
                    <div width="144" alt="Tesla logo" className="logo-banner--logo tesla-logo w-1/6 h-20 med:hidden" />
                    <div width="144" alt="Hunger Rush logo" className="logo-banner--logo hunger-rush-logo w-1/6 h-36 med:hidden" />
                    <div width="144" alt="Appgate logo" className="logo-banner--logo appgate-logo w-1/6 h-36 med:hidden" />
                    <div width="144" alt="Payroc logo" className="logo-banner--logo payroc-logo w-1/6 h-24 med:hidden" />
                    <div width="144" alt="Persona logo" className="logo-banner--logo persona-logo w-1/6 h-36 med:hidden" />
                    <div width="144" alt="Psycho Bunny logo" className="logo-banner--logo psycho-bunny-logo w-1/6 h-8 med:hidden" />
                    <div width="144" alt="Hunger Rush logo" className="logo-banner--logo studio88-logo w-1/6 h-44 med:hidden" />
                    <div width="144" alt="Reality AI logo" className="logo-banner--logo reality-ai-logo w-1/6 h-36" />
                </div>
            </div>
        </div>
    )
}

export default LogoBanner;