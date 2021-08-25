import React from "react";
import emailjs from 'emailjs-com';

export default function Modal() {
    const Modalclase =()=>{
        document.getElementById('exampleModal').classList.remove('show');
        document.getElementById("exampleModal").style.display="none"; 
        document.body.style.overflow="auto"; 
        document.body.classList.remove('modal-open');
     };
     function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
    <div className="modal fade customodal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"></h5>
                        <button type="button"  onClick={Modalclase} id="btnclose" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <h4><span>Contact Us</span> Lorem Ipsum is simply dummy text</h4>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-outline">
                                <i className="fa fa-user prefix"></i>
                                <input type="text" className="form-control" name="fname" id="firstname"  required/>
                                <label className="form-label" for="firstname">First Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-outline">
                                <i className="fa fa-user prefix"></i>
                                <input type="text" className="form-control" name="lname" id="lastname" required/>
                                <label className="form-label" for="lastname">Last Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-outline">
                                <i className="fa fa-envelope prefix"></i>
                                <input type="email" className="form-control" name="lemail" id="emailad" required/>
                                <label className="form-label" for="emailad">Email Address</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-outline">
                                <i className="fa fa-phone prefix"></i>
                                <input type="number" className="form-control" name="lphone" id="typePhone" required/>
                                <label className="form-label" for="typePhone">Phone No.</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-outline ah_textbox">
                                <i className="fa fa-envelope-open-text prefix"></i>
                                <textarea className="form-control" id="typemasage" name="lmessage" rows="4" required></textarea>
                                <label className="form-label" for="typemasage">Message</label>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary">Submit Now</button>
                            </div>
                        </form>
                        </div> 
                        <div className="modal-footer">
                        
                        </div>
                    </div>
                    </div>
                </div>
    )};