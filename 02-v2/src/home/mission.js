import React from "react";

const Mission = () => {
    return (
        <div className="container mx-auto text-blue text-left pb-12 pt-24 px-6 flex flex-col gap-10 font-bold lg:py-36 lg:w-4/5">
            <h2 className="text-5xl pointer-events-none">Our Mission</h2>
            <p className="text-base leading-8 pointer-events-none">Partnered Management Groups mission is to provide affordable, client-first project management services that prioritize measurable results. Our collaborative approach ensures we understand our clients' unique goals and objectives, delivering projects on time and within budget to the highest standards of quality.  As a trusted partner with over 30 years of experience, we help our clients achieve success and drive their businesses forward.</p>
            <a href="/about" className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">Why PMG?</a>
        </div>
    )
}


export default Mission;