import React from "react";
import Rocket from "./rocket"
import Stats from "./stats"


class Hero extends React.Component {
    render() {
        return (
            <div className="container px-6 py-12 mx-auto relative min-h-screen md:h-screen md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:items-center">
                <div className="text-blue text-left row-span-1 col-span-1">
                    <h1 className="text-5xl font-light pointer-events-none">Launch Your Projects <span className="font-bold">With Confidence.</span></h1>
                    <p className="text-xl font-bold mt-5 pointer-events-none">With our expert project and product management on your team, you scale faster — for less.</p>
                </div>
                <div className="row-span-2 col-span-1">
                    <Rocket />
                </div>
                <div className="row-span-1 col-span-1 self-start">
                    <Stats />
                </div>
            </div>
        );
    }
}

export default Hero;
