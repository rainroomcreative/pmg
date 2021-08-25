import React from "react";
import Footer from "./../includes/footer.js";
import Banner from "./banner.js";
import Services from "./services.js";
import Slogan from "./slogan.js";
import Weoffer from "./weoffer.js";

export default function Index() {
    return (
        <main>
            <Banner/>
            <Services/>
            <Slogan/>
            <Weoffer/>
            <Footer/>
        </main>
    )
};