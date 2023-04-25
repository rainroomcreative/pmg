import React from "react";
import PricingTable from "./pricingTable";
import FAQ from "./faq";
import CustomPricing from "./customPricing";

const Pricing = () => {
    return (
        <div>
            <div className="w-full flex flex-col px-6 container mx-auto font-bold">
                <div className="text-black text-left py-24">
                    <h1 className="text-5xl lg:text-center">Fractional Rates - Maximum Results</h1>
                    <p className="text-base leading-8 mt-10">We believe that transparency and open communication are essential in any successful business relationship. That's why we're committed to providing clear and concise pricing information to our clients. No hidden fees, no surprises – just quality fractional project management services at a fraction of the cost.</p>
                </div>
                <PricingTable/>
            </div>
            <FAQ/>
            <CustomPricing/>

        </div>
    )
}

export default Pricing;