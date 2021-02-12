 import React from 'react';

 const About = () => {
     return (
        <div className="container" id="about">
      <div className="row about-container">
        <h1 className=" col-xs col-sm col-md col-lg- col-xl about-me-content">About Me</h1>
      </div>
      <div className="row">
        <div className=" col-xs col-sm col-md col-lg col-xl">
          <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/v1606430218/Portfolio/bio-pic_xvc1la.jpg" className="img-thumbnail" id="about-image" alt='Personal Headshot'/>
        </div>
      </div>
      <div className="row flex-nowrap">
        <div className="col-xs col-sm col-md col-lg col-xl img-col">
            <p className="about-description">
            I’m August Shah. While a professional pilot by trade, I also work as a full stack web developer. Through
            working with
            various languages, I’ve developed a love of bringing abstract concepts and ideas to life. With each
            project I produce, I
            seek to push the bounds of creativity. I am a flexible and versatile developer who is dedicated to you, as
            the client. I
            seek to provide a seamless experience that will allow me to be as involved in the project as you may need.
            I use the
            latest technologies to ensure quality, functionality, and security.
            <br />
            I specialize in HTML, CSS, JavaScript, PHP, SQL, and MongoDB, with experience with Node.js, and Bootstrap. I
            can create
            custom web design, WordPress, and Squarespace sites.
            <br />
            If you are ready to take this journey with me, then please send me a message. I look forward to hearing
            from you.
          </p>
            </div>
          </div>
    </div>
     )
 }

 export default About;