 import React from 'react';

 import { Card, Icon, Image } from 'semantic-ui-react'


 const About = () => {
   const url = 'https://res.cloudinary.com/dyew1z2ms/image/upload/v1606430218/Portfolio/bio-pic_xvc1la.jpg';

   
     return (
      <div className="d-flex justify-content-center">
      <Card className="about-card" id='about'>
        <Image src={url} alt='Bio image' className='bio-pic' textAlign='center'/>
        <Card.Content>
          <Card.Header textAlign='center'>
            <h1>About Me</h1>
          </Card.Header>
          <Card.Description textAlign='left'>
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
          </Card.Description>
        </Card.Content>
      </Card>
      </div>
     )
 }

 export default About;