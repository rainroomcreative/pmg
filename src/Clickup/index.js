import React from "react";


export default function Index() {

 
    return(
        <div className="pt-5">
           <iframe width='100%' height='900px' src={process.env.REACT_APP_ClickupOnboarding} />
        </div>
    )
}