import React from "react";


class Hero extends React.Component {
    render() {
        return (
            <div className="container w-full flex flex-col-reverse mb-24 md:mb-0 mx-auto md:grid md:grid-cols-2 md:grid-rows-1">
                <div className="text-blue text-left row-span-1 col-span-1 flex flex-col items-center justify-center z-30 font-bold px-6 -mt-20 md:mt-0 md:h-full">
                    <h1 className="text-5xl pointer-events-none">Why Project Management Group?</h1>
                    <p className="text-base leading-8 mt-10 pointer-events-none">At Partnered Management Group, we are dedicated to fulfilling our mission of providing client-centric project management services that prioritize tangible results while remaining cost-effective. Our team acknowledges the significance of delivering personalized solutions that cater to the individual needs of each client without exceeding their budget. We are committed to delivering exceptional quality services that surpass the expectations of our clients. <br /> We look forward to working with you!</p>
                </div>
                <div className="row-span-2 col-span-1 bg-aboutHero h-120 md:h-screen bg-cover bg-no-repeat bg-top md:bg-contain md:bg-bottom">
                </div>
            </div>
        );
    }
}

export default Hero;