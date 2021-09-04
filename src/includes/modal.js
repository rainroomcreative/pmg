import React, {useState} from "react";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Modal() {
    const Modalclase =()=>{
        document.getElementById('exampleModal').classList.remove('show');
        document.getElementById("exampleModal").style.display="none"; 
        document.body.style.overflow="auto"; 
        document.body.classList.remove('modal-open');
     };

     init(`${process.env.REACT_APP_UserId}`);
     const [open, setOpen] = useState(false);
     const [verified, setVerified] = useState(false)

     const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      // function that sets the verfied state to true
      const handleVerify = () => {
        
        setVerified(true);
      
      }

   

     const sendEmail = (e)  => {

        if(verified) {

          setOpen(true);
        
          e.preventDefault();
      
          emailjs.sendForm(
            `${process.env.REACT_APP_ServiceId}`,
            `${process.env.REACT_APP_TemplateId}`, 
            e.target, 
            `${process.env.REACT_APP_UserId}`)
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        } else {

          return;
    }
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
                        <h4><span>Contact Us</span> Ready to elevate your business?</h4>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-outline">
                                <i className="fa fa-user prefix"></i>
                                <input type="text" className="form-control" name="first_name" id="firstname" placeholder="First Name"  required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-outline">
                                <i className="fa fa-user prefix"></i>
                                <input type="text" className="form-control" name="last_name" id="lastname" placeholder="Last Name" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-outline">
                                <i className="fa fa-envelope prefix"></i>
                                <input type="email" className="form-control" name="email" id="emailad" placeholder="Email" required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-outline">
                                <i className="fa fa-phone prefix"></i>
                                <input type="tel" className="form-control" name="phone_number" id="typePhone" placeholder="Phone No."/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-outline ah_textbox">
                                <i className="fa fa-envelope-open-text prefix"></i>
                                <textarea className="form-control" id="typemasage" name="message" rows="4"  placeholder="Message" required></textarea>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-12 text-center">
                            <ReCAPTCHA
                                sitekey={`${process.env.REACT_APP_sitekey}`}
                                onChange={handleVerify}
                            />
                           {verified ? <button type="submit" className="btn btn-primary">Submit Now</button> : <button type="submit" className="btn btn-primary" disabled >Submit Now</button>}
                            </div>
                        </form>
                        </div> 
                        <div className="modal-footer">
                        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="info">
                                Your Email has been sent 👍
                            </Alert>
                        </Snackbar>  
                        </div>
                    </div>
                    </div>
                </div>
    )};