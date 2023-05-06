import React from "react";
import Hero from "./hero";
import ReviewsCarousel from "./reviewsCarousel";
import Beliefs from "./beliefs";
import Team from "./team";

const About = () => {
    return (
        <div>
            <Hero />
            <ReviewsCarousel />
            <Beliefs />
            <Team />
        </div>
    )
}

export default About;