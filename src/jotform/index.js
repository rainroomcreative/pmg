import React from "react";
import JotformEmbed from 'react-jotform-embed';



export default function Index() {

 
    return(
        <div className="pt-5">
           <JotformEmbed src={process.env.REACT_APP_JotFormEmbed} />
        </div>
    )
}