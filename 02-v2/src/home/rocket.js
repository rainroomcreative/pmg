import React from "react";
import RocketImage from "./images/Rocket.png";
import { Parallax } from 'react-scroll-parallax';

function Rocket() {

    return (
        <div className="mx-auto bg-smoke bg-bottom bg-no-repeat bg-contain w-full">
            <Parallax translateY={[15, -20]}>
                <img
                src={RocketImage}
                alt="Rocket"
                className="mx-auto z-10 pointer-events-none"
                />
            </Parallax>
        </div>
    );
}

export default Rocket;