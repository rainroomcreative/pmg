
import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init('user_H2dSH0v7XWD3nG6vyyosk');

// #TODO Configure Env variables for the EmailJS Client.


const Contact = () => {
    const {REACT_APP_UserId, REACT_APP_TemplateId, REACT_APP_ServiceId} = process.env;
    const serviceId = process.env.REACT_APP_ServiceId;
    const templateId =  process.env.REACT_APP_TemplateId;
    const userId = process.env.REACT_APP_UserId; 


    const sendEmail = (e)  => {
    e.preventDefault();

    emailjs.sendForm(`${serviceId}`, `${templateId}`, e.target, `${userId}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    return (
<div className="container" id="container-loader">
    <div className="row contact-row" id="contact-row-id">
        <div className="col-xs col-sm col-md col-lg col-xl contact-container" id="contact-container-id">
          <div className="form">
            <h1 className="contact-content">Contact Us</h1>

            <form id="contact" onSubmit={sendEmail}>
              <div className="form-group">
                <label for="name">Name </label>
                <br />
                <input className="form-control" type="text" name="from_name" id="name" required />
              </div>
              <div className="form-group">
                <label for="email"> Email </label>
                <br />
                <input className="form-control" type="email" name="email" id="email" required />
              </div>
              <div className="form-group">
                <label for="message"> Message </label>
                <br />
                <textarea className="form-control" rows="3" name="message" id="message" required></textarea>
              </div>
              <input className="form-control btn" type="submit" value="Send Email" id="submit" />
            </form>

          </div>
    
         
    
            </div>
        </div>
        <video autoPlay muted id="video">
  <source src="https://res.cloudinary.com/dyew1z2ms/video/upload/v1609972343/Portfolio/video_op4mbh.mp4" type="video/mp4" />
    </video>
      </div>
    )
}

export default Contact;