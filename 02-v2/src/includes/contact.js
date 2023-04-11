import React from "react";

function ContactForm() {
  return (
    <div className="w-full flex flex-col py-12 px-6 text-left text-blue font-bold lg:flex-row lg:justify-between container mx-auto" id="contact">
      <div className="mb-12 lg:w-2/5">
        <h2 className="text-5xl mb-12">Ready To Start?</h2>
        <p className="text-base leading-8">Save time and money through our expert fractional project management consulting services. We look forward to building a successful partnership with you!</p>
      </div>
      <div className="lg:w-2/5">
        <h3 className="text-3xl border-b-blue border-b-solid border-b pb-5">Send Us a Message</h3>
        <form className="mt-12 gap-2.5 flex flex-col w-full md:grid">
          <div className="w-full flex flex-col gap-2 md:col-span-1">
            <label className="text-sm" htmlFor="first_name">First Name</label>
            <input className="border-blue border border-solid rounded-3xl h-10 px-3" type="text" id="first_name" name="first_name" required/>
          </div>
          <div className="w-full flex flex-col gap-2 md:col-span-1"> 
            <label className="text-sm" htmlFor="last_name">Last Name</label>
            <input className="border-blue border border-solid rounded-3xl h-10 px-3" type="text" id="last_name" name="last_name" required/>
          </div>
          <div className="w-full flex flex-col gap-2 md:col-span-1">
            <label className="text-sm" htmlFor="email">Email</label>
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
          <div className="mt-12 md:basis-full md:col-span-2">
            <button className="text-sm text-white bg-blue w-full py-2.5 rounded-3xl" type="submit">Contact Us</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;