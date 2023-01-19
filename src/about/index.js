
import React from "react";
import Footer from "./../includes/footer.js";
import About from "./about.js";
import Team from "./team.js";
import Weoffer from "./../index/weoffer.js";

export default function Index() {
    return (
        <main>
            <About/>
            <Weoffer/>
            <Team />
            <Footer/>
        </main>
    )
};