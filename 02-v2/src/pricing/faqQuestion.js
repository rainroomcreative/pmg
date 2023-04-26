import React from 'react';
import {ReactComponent as Plus} from "./images/plus.svg";

const FaqItem = ({faq, onToggle, active}) => {
    const { question, answer } = faq;

    return (
        <div className="faq lg:basis-[44%] lg:flex-initial">
            <div className={"pb-8 border-b-fadedBlack border-b-solid transition-all" + `${active ? " border-b-0" : " border-b"}`}>
                <div className="flex flex-row justify-between items-center cursor-pointer" onClick={onToggle}>
                    <h4 className="cursor-pointer">{question}</h4>
                    <Plus className={active? 'rotate-45 transition-all' : 'rotate-0 transition-all'}/>
                </div> 
                <div className={"font-normal mt-8 transition-all pointer-events-none" + `${active? ' block' : ' hidden'}`}>{answer}</div>
            </div>
        </div> 
    )
}

export default FaqItem;