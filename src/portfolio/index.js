import React from "react";
import Footer from "./../includes/footer.js";
import Banner from "./banner.js";
import Ourwork from "./our-work.js";
import Ourservices from "./../services/our-services.js";
import WhyChooseus from "./../services/why-choose-us.js";

export default function Index() {
    return (
        <main>
            <Banner/>
            <Ourwork/>
     {       /*<Ourservices/>
            <WhyChooseus/> */}
            <Footer/>
        </main>
    )
};