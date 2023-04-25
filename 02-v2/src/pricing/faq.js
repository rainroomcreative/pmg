import React, {useState} from "react";
import { questions } from "./questions";
import FaqItem from "./faqQuestion";

const FAQ = () => {  
    const [isActive, setActive] = useState("0");

    const toggleQuestion = (id) => {
        if (isActive === id) {
            return setActive("0");
           }
           setActive(id);
    };

    return (
        <div className="w-full px-6 py-9 container mx-auto font-bold text-black">
            <h3 className="mb-20 text-3xl">Frequently Asked Questions</h3>
            <div className="w-full flex flex-col lg:flex-row flex-wrap justify-between text-base text-left gap-x-32 gap-y-8">
            {questions.map((faq) => (
                <FaqItem key={faq.id} faq={faq} onToggle={() => toggleQuestion(faq.id)} active={isActive === faq.id}/>
            ))}
            </div>
        </div>
    )
}
 export default FAQ;


//export default FAQ;

