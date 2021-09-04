import React from "react";
import LogRocket from 'logrocket';
import { v4 as uuidv4 } from 'uuid';
import  "firebase/analytics";
import firebase from "firebase/app";

import Footer from "./../includes/footer.js";
import Banner from "./banner.js";
import Services from "./services.js";
import Slogan from "./slogan.js";
import Weoffer from "./weoffer.js";

export default function Index() {

    LogRocket.getSessionURL(function (sessionURL) {
        firebase.analytics().logEvent({
            hitType: 'event',
            eventCategory: 'LogRocket',
            eventAction: sessionURL,
        })
      });

    const id = uuidv4();
        //    uncomment line below before push to PROD
    LogRocket.identify(`${id}`);

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