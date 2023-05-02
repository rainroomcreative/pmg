import React from "react";


class Hero extends React.Component {
    render() {
        return (
            <div className="container w-full flex flex-col-reverse mb-24 md:mb-0 mx-auto md:grid md:grid-cols-2 md:grid-rows-1">
                <div className="text-blue text-left row-span-1 col-span-1 flex flex-col items-center justify-center z-30 font-bold px-6 -mt-20 md:mt-0 md:h-full">
                    <h1 className="text-5xl pointer-events-none">Why Project Management Group?</h1>
                    <p className="text-base leading-8 mt-10 pointer-events-none">Project Management Group remains committed to its mission of delivering client-focused project management services that prioritize measurable outcomes while being affordable. Our team recognizes the importance of delivering customized solutions that are tailored to meet the unique requirements of each client without breaking the bank. We strive to ensure that our clients receive the highest quality service that exceeds their expectations and look forward to the opportunity to work with you.</p>
                </div>
                <div className="row-span-2 col-span-1 bg-aboutHero h-120 md:h-screen bg-cover bg-no-repeat bg-top md:bg-contain md:bg-bottom">
                </div>
            </div>
        );
    }
}

export default Hero;