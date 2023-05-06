import React from "react";
import PricingTable from "./pricingTable";
import FAQ from "./faq";
import CustomPricing from "./customPricing";

const Pricing = () => {
    return (
        <div>
            <div className="w-full flex flex-col px-6 container mx-auto font-bold">
                <div className="text-black text-left py-24">
                    <h1 className="text-5xl lg:text-center pointer-events-none">Partnered Program <br /></h1>
                    <h2 className="text-4xl pt-4 font-light lg:text-center pointer-events-none">Fractional Rates - Maximum Results</h2>
                    <p className="text-lg font-semibold leading-8 mt-10 pointer-events-none">Our project management service is built on transparency and trust. We believe that providing clear and concise information is key to building a successful relationship with our clients. With no hidden fees or surprises, you can expect quality project management services that are tailored to your unique needs at fractional rates.</p>
                </div>
                <PricingTable/>
            </div>
            <FAQ/>
            <CustomPricing/>

        </div>
    )
}

export default Pricing;