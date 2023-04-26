import React from "react";
import {ReactComponent as Arrow} from "./images/arrow-drop-down.svg";
import {coreValues} from "./coreValues";

const Beliefs = () => {
    return (
        <div className="w-full flex flex-col px-6 lg:h-200 container mx-auto">
            <div className="text-blue text-left font-bold py-24">
                <h1 className="text-5xl pointer-events-none">Our Core Values</h1>
                <p className="text-base leading-8 mt-10 pointer-events-none">We are a dedicated fractional project management consulting firm that is committed to delivering exceptional services that exceed our clients' expectations. Our focus on continuous improvement and attention to detail ensures that every project is completed to the highest standard, while our commitment to client satisfaction sets us apart from the competition.</p>
            </div>
            <div className="flex flex-col text-white gap-9 justify-center font-bold items-start lg:flex-row">
                {coreValues.map((value) => (
                    <div key={value.id} className="bg-blue px-5 py-6 text-left w-full rounded-3xl flex flex-col shrink justify-center items-start gap-6 service-card h-52 hover:h-80 lg:w-1/4 lg:h-60 transition-all">
                        <h3 className="text-5xl pointer-events-none">{value.number}</h3>
                        <div className="flex flex-row justify-between items-center w-full">
                            <h2 className="text-3xl lg:text-2xl xl:text-3xl pointer-events-none">{value.title}</h2>
                            <Arrow className="toggle-arrow lg:hidden"/>
                        </div>
                        <p className="hidden text-base leading-8 text-left hidden-text pointer-events-none">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Beliefs;