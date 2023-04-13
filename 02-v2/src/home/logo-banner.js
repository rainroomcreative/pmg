import React from "react";
import JetiLogo from "./images/Jeti.svg";
import OrderAILogo from "./images/OrderAI.svg";
import BellAirLogo from "./images/BellAir.svg";
import MightyTrueLogo from "./images/MightyTrue.svg";
import RealityAILogo from "./images/RealityAI.svg";

class LogoBanner extends React.Component {
    render() {
        return (
            <div className="bg-blue w-screen">
                <div className="flex flex-row justify-between items-center gap-12 h-48 w-max overflow-x-scroll">
                    <img src={JetiLogo} alt="Jeti logo" className="w-1/6 h-7" />
                    <img src={OrderAILogo} alt="Order AI logo" className="w-1/6 h-8" />
                    <img src={BellAirLogo} alt="Bell Air logo" className="w-1/6 h-12" />
                    <img src={MightyTrueLogo} alt="Mighty & True logo" className="w-1/6 h-4" />
                    <img src={RealityAILogo} alt="Reality AI logo" className="w-1/6 h-8" />
                </div>
                <div className="flex flex-row justify-between items-center gap-12 h-48 w-max overflow-x-scroll">
                    <img src={JetiLogo} alt="Jeti logo" className="w-1/6 h-7" />
                    <img src={OrderAILogo} alt="Order AI logo" className="w-1/6 h-8" />
                    <img src={BellAirLogo} alt="Bell Air logo" className="w-1/6 h-12" />
                    <img src={MightyTrueLogo} alt="Mighty & True logo" className="w-1/6 h-4" />
                    <img src={RealityAILogo} alt="Reality AI logo" className="w-1/6 h-8" />
                </div>
            </div>
        )
    }
}

export default LogoBanner;