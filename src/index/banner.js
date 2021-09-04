import React, {useState} from "react";
import { Link } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import seework from './img/see-work.png';
import bannerimg from './img/banner-img.png';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Banner() {


    const [open, setOpen] = useState(true);
    // Set to true to show the DonwnTime notification
    const downTime = false; 
    // Change month, day, year to date that dowwn time will start
    const downTimeMonth =     'October';
    const downTimeDay   =     '1st' ;
    const downTimeYear  =     '2021' ;
    const expectedTime  =     '2'

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };


      
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                <div className="col-md-5">
            
                 { downTime ?   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="info">
                                02Designstudio is going to be making changes on {downTimeMonth} {downTimeDay}, {downTimeYear}. Expect Service outages for {expectedTime} hours 👍
                        </Alert>
                    </Snackbar> : null }
                    <div className="box">
                    <h4>Pixel perfect CUSTOM solutions </h4>
                    <p>A web and app design, development, and consulting agency focused on providing premium services, without premium prices.</p>
                    <ul>
                        <li><Link to="/portfolio"><img src={seework} alt="See Our Works"/>See our works</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-7">
                    <figure className="bg-image hover-overlay ripple ripple-surface ripple-surface-light">
                    <img src={bannerimg} alt="Banner" />
                    </figure>
                </div>
                </div>
            </div>
            </section>
  
    );
  }
 