import React from "react";
import {Link} from 'react-router-dom';

const CustomPricing = () => {
    return (
        <div className="w-full flex flex-col px-6 container mx-auto  text-black text-left py-24">
            <h2 className="text-3xl pointer-events-none font-bold">Need Custom Pricing?</h2>
            <p className="text-base leading-8 mt-5 pointer-events-none">We understand that every business is unique, and that's why we offer custom pricing options tailored to fit your specific needs. We believe that everyone deserves access to quality fractional project management services, regardless of their budget. So, if you have any questions about our pricing or need a customized plan, please don't hesitate to contact us. We're happy to work with you to find a solution that fits your budget and helps your business succeed.</p>
            <Link to="#contact" className="w-full mt-10 text-white bg-blue text-center py-3 rounded-3xl duration-150 transition-colors hover:text-white hover:bg-gold md:w-48">Ask a Question</Link>
        </div>
    )
}

export default CustomPricing;