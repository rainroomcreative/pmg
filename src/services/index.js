
import React from "react";
import Footer from "./../includes/footer.js";
import Banner from "./banner.js";
import Ourservices from "./our-services.js";
import WhyChooseus from "./why-choose-us.js";

export default function Index() {
    return (
        <main>
            <Banner/>
            <Ourservices/>
            <WhyChooseus/>
            <Footer/>
        </main>
    )
};