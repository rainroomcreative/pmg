import React from "react";
import {Link} from "react-router-dom";

const Mission = () => {
    return (
        <div className="container mx-auto text-blue text-left pb-12 pt-24 px-6 flex flex-col gap-10 font-bold lg:py-36 lg:w-4/5">
            <h2 className="text-5xl pointer-events-none">Our Expertise</h2>
            <p className="text-lg leading-8 pointer-events-none">By joining the Partnered Program you gain access to a team of highly skilled project and product managers with over 30 years of experience. Leveraging our Work Smarter strategy, our experts are equipped with the latest tools and possess the critical thinking and analytical skills necessary to tackle even the most complex projects. They will help you streamline your project management processes, identify hidden risks and opportunities, and achieve successful outcomes. Whether you're starting a new project or seeking to optimize existing ones, our team is dedicated to taking your business to the next level.</p>
            <Link to="/about" className="w-full mt-5 text-blue bg-transparent border border-solid border-blue text-center py-3 rounded-3xl hover:text-white hover:bg-gold hover:border-gold md:w-48">Why PMG?</Link>
        </div>
    )
}


export default Mission;