import React, { useState } from "react";
import {ReactComponent as FractionalPMIcon} from "./images/fractionalPM.svg";
import {ReactComponent as ProcessAuditsIcon} from "./images/ProcessAudits-icon.svg";
import {ReactComponent as UXIcon} from "./images/UXUIDesign-icon.svg";
import {ReactComponent as WebDevIcon} from "./images/WebDev-icon.svg";
import {ReactComponent as Arrow} from "./images/arrow-drop-down.svg"

const Services = () => {
    const [pmIsActive, setPmActive] = useState(false);
    const [auditsIsActive, setAuditsActive] = useState(false);
    const [uxIsActive, setUxActive] = useState(false);
    const [devIsActive, setDevActive] = useState(false);

    return (
        <div className="w-full flex flex-col px-6 lg:h-screen container mx-auto">
            <div className="text-blue text-left py-24">
                <h1 className="text-5xl">What We Can Do For You</h1>
                <p className="text-base leading-8 mt-10">We work closely with our clients to ensure that our services are aligned with their business objectives, and we strive to deliver the highest level of quality and professionalism in everything we do. Whatever your business needs may be, we are committed to providing the best possible service and helping you achieve your goals.</p>
            </div>
            <div className="flex flex-col text-white gap-9 justify-center align-center lg:flex-row">
                <div className="bg-blue px-5 py-6 rounded-3xl flex flex-col justify-center align-center gap-6 service-card h-52 hover:h-80 lg:w-1/4 lg:h-60 transition-all">
                    <FractionalPMIcon className="mx-auto h-12"/>
                    <h2 className="text-3xl">Fractional PM</h2>
                    <Arrow className="mx-auto toggle-arrow"/>
                    <p className="hidden text-base leading-8 text-left hidden-text">Our expert project managers provide cost-effective and efficient project management services to help you achieve your project goals.</p>
                </div>
                <div className="bg-blue px-5 py-6 rounded-3xl flex flex-col justify-center align-center gap-6 service-card h-52 hover:h-80 lg:w-1/4 lg:h-60 transition-all">
                    <UXIcon className="mx-auto h-12"/>
                    <h2 className="text-3xl">UX & UI Design</h2>
                    <Arrow className="mx-auto toggle-arrow"/>
                    <p className="hidden text-base leading-8 text-left hidden-text">Our talented designers create intuitive and user-friendly digital interfaces that enhance user experiences and improve engagement.</p>
                </div>
                <div className="bg-blue px-5 py-6 rounded-3xl flex flex-col justify-center align-center gap-6 service-card h-52 hover:h-80 lg:w-1/4 lg:h-60 transition-all">
                    <WebDevIcon className="mx-auto h-12 stroke-svg"/>
                    <h2 className="text-3xl">Web Development</h2>
                    <Arrow className="mx-auto toggle-arrow"/>
                    <p className="hidden text-base leading-8 text-left hidden-text">We develop responsive and high-performing websites that are optimized for all devices and browsers.</p>
                </div>
                <div className="bg-blue px-5 py-6 rounded-3xl flex flex-col justify-center align-center gap-6 service-card h-52 hover:h-80 lg:w-1/4 lg:h-60 transition-all">
                    <ProcessAuditsIcon className="mx-auto h-12"/>
                    <h2 className="text-3xl">Process Audits & Optimization</h2>
                    <Arrow className="mx-auto toggle-arrow"/>
                    <p className="hidden text-base leading-8 text-left hidden-text">We help businesses improve their efficiency and productivity by analyzing and optimizing their business processes to achieve better results.</p>
                </div>
            </div>
        </div>
    );
}

/*const toggleCard = (card) => {
    console.log(card);
    let cards = document.querySelectorAll(".service-card");
    let currentCard = document.querySelector(`[data-name=${card}]`);

    cards.forEach(card => {
        card.classList.remove("active");
    })

    currentCard.classList.toggle("active");
}*/

export default Services;