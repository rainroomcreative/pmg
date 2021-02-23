
import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init(`${process.env.REACT_APP_UserId}`);

// #TODO Configure Env variables for the EmailJS Client.



const Contact = () => {


    const sendEmail = (e)  => {
    e.preventDefault();
      console.log(process.env);
    emailjs.sendForm(
      `${process.env.REACT_APP_ServiceId}`,
       `${process.env.REACT_APP_TemplateId}`, 
       e.target, 
       `${process.env.REACT_APP_UserId}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    return (
<div className="container" id="container-loader">
    <div className="row contact-row justify-content-center" id="contact-row-id">
        {/* <div className="col-xs col-sm col-md col-lg col-xl contact-container" id="contact-container-id"> */}
        <div className="col-11 col-xs-11 col-sm-11 col-md-8 col-lg-6 col-xl-6 contact-container" id="contact-container-id">
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