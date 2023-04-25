import React from "react";
import {ReactComponent as Check} from "./images/checkmark.svg";

const PricingTable = () => {
    return (
        <div className="flex flex-col gap-8 lg:flex-row text-black container pb-24">
            <div className="bg-lightBlue1 px-5 py-6 rounded-3xl flex flex-col justify-between align-center gap-6 lg:1/4">
                <div className="flex flex-col gap-6 align-center justify-center">
                    <h2 className="text-3xl">Basic</h2>
                    <h3 className="text-5xl">$700<span className="text-base">/mo</span></h3>
                    <div className="border-b-black border-b-solid border-b w-24 h-1 mx-auto"></div>
                    <ul className="flex flex-col gap-7 text-left">
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">10 Management Hours</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Dedicated Project Manager</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">48 hour Response Time</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Dedicated Support through email: M - F</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Access to 4 Templates</p>
                        </li>
                    </ul>
                </div>
                <a href="#contact" className="border-black border border-solid rounded-3xl bg-transparent text-black text-sm py-3 text-center hover:bg-gold hover:text-white hover:border-gold">Make an Inquiry</a>
            </div>

            <div className="bg-blue px-5 py-6 rounded-3xl flex flex-col justify-between align-center gap-6 drop-shadow-3xl text-white lg:1/4">
                <div className="flex flex-col gap-6 align-center justify-center">
                    <h2 className="text-3xl">Business</h2>
                    <h3 className="text-5xl">$1500<span className="text-base">/mo</span></h3>
                    <div className="border-b-white border-b-solid border-b w-24 h-1 mx-auto"></div>
                    <ul className="flex flex-col gap-7 text-left">
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm">24 Management Hours</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm">Dedicated Project Manager</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm">24 hour Response Time</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm">Dedicated Slack Channel Support: M - F</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm">Access to All Templates</p>
                        </li>
                    </ul>
                </div>
                <a href="#contact" className="border-white border border-solid rounded-3xl bg-transparent text-white text-sm py-3 text-center hover:bg-gold hover:text-white hover:border-gold">Make an Inquiry</a>
            </div>

            <div className="bg-lightBlue3 px-5 py-6 rounded-3xl flex flex-col justify-between align-center gap-6 lg:1/4">
                <div className="flex flex-col gap-6 align-center justify-center">
                    <h2 className="text-3xl">Business Pro</h2>
                    <h3 className="text-5xl">$2700<span className="text-base">/mo</span></h3>
                    <div className="border-b-black border-b-solid border-b w-24 h-1 mx-auto"></div>
                    <ul className="flex flex-col gap-7 text-left">
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">48 Management Hours</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Dedicated Project Manager</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">3 hour Response Time</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Dedicated Slack Channel Support: M - F</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Access to All Templates</p>
                        </li>
                    </ul>
                </div>
                <a href="#contact" className="border-black border border-solid rounded-3xl bg-transparent text-black text-sm py-3 text-center hover:bg-gold hover:text-white hover:border-gold">Make an Inquiry</a>
            </div>

            <div className="bg-lightBlue2 px-5 py-6 rounded-3xl flex flex-col justify-between align-center gap-6 lg:1/4">
                <div className="flex flex-col gap-6 align-center justify-center">
                    <h2 className="text-3xl">Enterprise</h2>
                    <h3 className="text-base">Contact For an Inquiry</h3>
                    <div className="border-b-black border-b-solid border-b w-24 h-1 mx-auto"></div>
                    <ul className="flex flex-col gap-7 text-left">
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">75+ Management Hours</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Dedicated Project Manager</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">2 hour Response Time</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Dedicated Support through email: M - F</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Access to 4 Templates</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm">Project Management Process Audit</p>
                        </li>
                    </ul>
                </div>
                <a href="#contact" className="border-black border border-solid rounded-3xl bg-transparent text-black text-sm py-3 text-center hover:bg-gold hover:text-white hover:border-gold">Make an Inquiry</a>
            </div>
        </div>
    )
}

export default PricingTable;