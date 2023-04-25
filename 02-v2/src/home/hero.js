import React from "react";
import Rocket from "./rocket"
import Stats from "./stats"


class Hero extends React.Component {
    render() {
        return (
            <div className="container px-6 py-12 mx-auto relative min-h-screen md:h-screen md:grid md:grid-cols-2 md:grid-rows-2 md:items-center">
                <div className="text-blue text-left row-span-1 col-span-1">
                    <h1 className="text-5xl font-light">Launch Your Projects <span className="font-bold">With Confidence.</span></h1>
                    <p className="text-base font-bold mt-5">Confidently check projects off your list and focus on growing your business, knowing that you have a trusted partner to guide you through every step of the process.</p>
                </div>
                <div className="row-span-2 col-span-1">
                    <Rocket />
                </div>
                <div className="row-span-1 col-span-1">
                    <Stats />
                </div>
            </div>
        );
    }
}

export default Hero;
