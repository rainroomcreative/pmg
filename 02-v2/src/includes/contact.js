import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import{ init } from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [verified, setVerified] = React.useState(false);
  const form = useRef();

  init(`${process.env.REACT_APP_PUBLIC_KEY}`);

  const handleVerify = () => {
    setVerified(true);
  };

  const sendEmail = (e) => {

    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full flex flex-col py-12 px-6 text-left text-blue font-bold lg:flex-row lg:justify-between lg:gap-28 container mx-auto" id="contact">
      <div className="mb-12 lg:w-1/2">
        <h2 className="text-5xl mb-12 pointer-events-none">Ready To Start?</h2>
        <p className="text-base leading-8 pointer-events-none">Save time and money through our expert fractional project management consulting services. We look forward to building a successful partnership with you!</p>
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-3xl border-b-blue border-b-solid border-b pb-5 pointer-events-none">Send Us a Message</h3>
        <form className="mt-12 gap-2.5 flex flex-col w-full md:grid" onSubmit={sendEmail}>
          <div className="w-full flex flex-col gap-2 md:col-span-1">
            <label className="text-sm" htmlFor="first_name">First Name*</label>
            <input className="border-blue border border-solid rounded-3xl h-10 px-3" type="text" id="first_name" name="first_name" required/>
          </div>
          <div className="w-full flex flex-col gap-2 md:col-span-1"> 
            <label className="text-sm" htmlFor="last_name">Last Name*</label>
            <input className="border-blue border border-solid rounded-3xl h-10 px-3" type="text" id="last_name" name="last_name" required/>
          </div>
          <div className="w-full flex flex-col gap-2 md:col-span-1">
            <label className="text-sm" htmlFor="email">Email*</label>
            <input className="border-blue border border-solid rounded-3xl h-10 px-3" type="email" id="email" name="email" required/>
          </div>
          <div className="w-full flex flex-col gap-2 md:col-span-1">
            <label className="text-sm" htmlFor="phone">Phone</label>
            <input className="border-blue border border-solid rounded-3xl h-10 px-3" type="tel" id="phone" name="phone" />
          </div>
          <div className="w-full flex flex-col gap-2 md:col-span-2">
            <label className="text-sm" htmlFor="message">Message</label>
            <textarea className="border-blue border border-solid rounded-3xl p-3" id="message" name="message" rows="5"></textarea>
          </div>
          <ReCAPTCHA sitekey={`${process.env.REACT_APP_SITE_KEY}`} onChange={handleVerify}/>
          <div className="mt-12 md:basis-full md:col-span-2">
            <button className={"text-sm text-white w-full py-2.5 rounded-3xl" + `${!verified ? " bg-lightBlue1" : " bg-blue hover:bg-gold"}`} type="submit" disabled={verified ? false : true}>Contact Us</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;