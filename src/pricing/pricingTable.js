import React from "react";
import {ReactComponent as Check} from "./images/checkmark.svg";

const PricingTable = () => {
    return (
        <div className="flex flex-col gap-x-8 gap-y-16 lg:justify-center lg:flex-wrap xl:flex-nowrap lg:flex-row text-black container pb-24">
            <div className="bg-lightBlue1 px-5 py-6 rounded-3xl flex flex-col justify-between align-center gap-6 lg:basis-[46%] xl:basis-1/4 flex-initial">
                <div className="flex flex-col gap-6 align-center justify-center">
                    <h2 className="text-3xl pointer-events-none">Basic</h2>
                    <h3 className="text-5xl pointer-events-none">$700<span className="text-base">/mo</span></h3>
                    <div className="border-b-black border-b-solid border-b w-24 h-1 mx-auto"></div>
                    <ul className="flex flex-col gap-7 text-left">
                    <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">White Labeled Service</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">10 Management Hours</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Dedicated Project Manager</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">48 Hour Response Time</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Dedicated Support Through Email</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Access To All Management Templates</p>
                        </li>
                    </ul>
                </div>
                <a href="https://square.link/u/gNCmh1r0" target="_blank" and rel="noopener noreferrer" className="border-black border border-solid rounded-3xl bg-transparent duration-150 transition-colors text-black text-sm py-3 text-center hover:bg-gold hover:text-white hover:border-gold">Sign Up Now</a>
            </div>

            <div className="bg-blue px-5 py-6 rounded-3xl flex flex-col justify-between align-center gap-6 drop-shadow-3xl text-white lg:basis-[46%] xl:basis-1/4 flex-initial">
                <div className="flex flex-col gap-6 align-center justify-center">
                    <h2 className="text-3xl pointer-events-none">Business</h2>
                    <h3 className="text-5xl pointer-events-none">$1500<span className="text-base">/mo</span></h3>
                    <div className="border-b-white border-b-solid border-b w-24 h-1 mx-auto"></div>
                    <ul className="flex flex-col gap-7 text-left">
                    <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm pointer-events-none">White Labeled Service</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm pointer-events-none">24 Management Hours</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm pointer-events-none">Dedicated Project Manager</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm pointer-events-none">24 Hour Response Time</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm pointer-events-none">Dedicated Slack Channel Support</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check className="white-check"/>
                            <p className="text-sm pointer-events-none">Access To All Management Templates</p>
                        </li>
                    </ul>
                </div>
                <a href="https://square.link/u/9CdkrgH2" target="_blank" and rel="noopener noreferrer" className="border-white border border-solid rounded-3xl bg-transparent duration-150 transition-colors text-white text-sm py-3 text-center hover:bg-gold hover:text-white hover:border-gold">Sign Up Now</a>
            </div>

            <div className="bg-lightBlue3 px-5 py-6 rounded-3xl flex flex-col justify-between align-center gap-6 lg:basis-[46%] xl:basis-1/4 flex-initial">
                <div className="flex flex-col gap-6 align-center justify-center">
                    <h2 className="text-3xl pointer-events-none">Business Pro</h2>
                    <h3 className="text-5xl pointer-events-none">$2700<span className="text-base">/mo</span></h3>
                    <div className="border-b-black border-b-solid border-b w-24 h-1 mx-auto"></div>
                    <ul className="flex flex-col gap-7 text-left">
                    <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">White Labeled Service</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">48 Management Hours</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Dedicated Project Manager</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Same Day Response Time</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Dedicated Slack Channel Support</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Access To All Management Templates</p>
                        </li>
                    </ul>
                </div>
                <a href="https://square.link/u/Hx2w4fOu" target="_blank" and rel="noopener noreferrer" className="border-black border border-solid rounded-3xl bg-transparent duration-150 transition-colors text-black text-sm py-3 text-center hover:bg-gold hover:text-white hover:border-gold">Sign Up Now</a>
            </div>

            <div className="bg-lightBlue2 px-5 py-6 rounded-3xl flex flex-col justify-between align-center gap-6 lg:basis-[46%] xl:basis-1/4 flex-initial">
                <div className="flex flex-col gap-6 align-center justify-center">
                    <h2 className="text-3xl pointer-events-none">Enterprise</h2>
                    <h3 className="text-base pointer-events-none">Contact Sales</h3>
                    <div className="border-b-black border-b-solid border-b w-24 h-1 mx-auto"></div>
                    <ul className="flex flex-col gap-7 text-left">
                    <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">White Labeled Service</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Starting at 75 Management Hours</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Dedicated Project Manager</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">3 Hour Response Time</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Dedicated Slack Channel Support</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Access To All Management Templates</p>
                        </li>
                        <li className="flex flex-row gap-4 items-center">
                            <Check/>
                            <p className="text-sm pointer-events-none">Project Management Process Audit</p>
                        </li>
                    </ul>
                </div>
                <a href="#contact" className="border-black border border-solid rounded-3xl bg-transparent duration-150 transition-colors text-black text-sm py-3 text-center hover:bg-gold hover:text-white hover:border-gold">Contact Sales</a>
            </div>
        </div>
    )
}

export default PricingTable;