import React from "react";
import TeamMember from "./teamMember";
import august from './img/August_square.jpg';
import josh from './img/Josh.jpg';
import jon from './img/Jon.jpg';
import jeff from './img/Jeff.jpg';
import ben from './img/Ben.jpg';
import shaelyn from './img/Shaelyn.jpg';
import sabrina from './img/sabrina.jpg';



export default function Team() {
    return (
        <section class="team-section">
            <div className="container">
                <div className="box">
                    <h3>Team</h3>
                    <div className="team-grid">
                        <TeamMember 
                            img={august} 
                            name="August Shah" 
                            title="Founder + Technical Project Manager" 
                            bio={"August is the founder of 02Designstudio. He has over 5 years of experience as a Software Engineer and over 4 years of experience as a Technical Project Manager. He has served as Director of Operations for an aviation company, Director of Product for a social media company, and the Director of Technology for multiple digital agencies. He uses his data-driven analytic skills to ensure every project is executed effectively and on budget."}
                        />
                        <TeamMember 
                            img={ben} 
                            name="Ben Frecon - (PMP)" 
                            title="Director of Project Management" 
                            bio={"With over 10 years of project experience, over 11 years of Business Management experience, and 12 years of Sales, Sales Management, and Sales Training experience, Ben contributes a vast array of skill sets to his projects.\n\nBen holds an MS in Accounting, Audit; BS in Business Administration; AA in Communications, and a current PMP certification."}
                        />
                        <TeamMember 
                            img={josh} 
                            name="Josh Bosley" 
                            title="CTO" 
                            bio={"Josh is a visionary leader and problem solver with a proven track record of success in various roles. He has served as Technical Lead and Co-Founder of an IoT company, CEO of a creative web agency, and fractional CTO for several forward-thinking startups and agencies. Passionate about making the world a better place through efficient and ethical businesses, Josh is skilled at building powerful teams by fostering a balance of creativity and optimization.\n\n Josh is a self-taught programmer with 11 years of coding experience in over 20 languages. He also has a background in electrical engineering, algorithms, and mathematics, developed through passion projects and a brief stint as an undergraduate at USU."}
                        />
                        <TeamMember 
                            img={jon} 
                            name="John Cheney" 
                            title="Creative Director" 
                            bio={"Jon is a versatile artist with a diverse range of interests and skills. With an educational background in design and eight years of experience in film, branding, design, animation, user experience, and marketing, he is passionate about utilizing new technologies and innovations to improve his workflow. He is dedicated to delivering a visually stunning product that meets the highest quality standards. In addition to his professional work, Jon is also a dedicated mentor and teacher. He enjoys sharing his knowledge and has helped many individuals reach their creative potential through attentive mentoring.\n\n When he's not working, Jon indulges his love for the anatomy of art by consuming and studying various forms of art. He also enjoys engaging in outdoor activities such as downhill longboarding, snowboarding, backcountry exploration, and photography."}
                        />
                        <TeamMember 
                            img={jeff} 
                            name="Jeff MacBride - (PMP, LSS)" 
                            title="Project Manager" 
                            bio={"Jeff is a passionate leader with over 15 years of experience in project and operations management. He has spent much of his career leading cross-functional teams and delivering strategic technology solutions to a wide range of customers. He has overseen system and software design, development, integration, and testing of multiple projects at various stages of the project lifecycle, leveraging both waterfall and agile methodologies. As a consultant, he has stood up project management offices for small companies with rapid growth in need of structure and process implementation. In his free time, Jeff enjoys going to the movies, traveling, working out, and spending time with family and friends."}
                        />
                        <TeamMember 
                            img={shaelyn} 
                            name="Shaelyn Ventrano - (PMP)" 
                            title="Project Manager" 
                            bio={"Shaelyn has over 10 years of project management experience in subjects of creative design, website development, e-learning, e-commerce, and small business social media planning.\n\n She has extensive experience in developing and implementing Standard Operating Procedures (SOPs) and developing and outlining comp\n\n Shaelyn holds an MS in Purchasing, Procurement/Acquisitions, Contract Management; BS in Business Administration, and a current PMP certification."}
                            
                        />
                        <TeamMember 
                            img={sabrina} 
                            name="Sabrina Ventrano - (PMP)" 
                            title="Project Manager" 
                            bio={"Sabrina has over 4 years of experience in digital project management. She specializes in SOP creation, budget management, and construction management. She applies her analytical and organizational skills to ensure each project is properly scoped and delivered on time. \n\n Sabrina holds a BS in Marketing / Communication and Social Interaction and a current PMP certification"}
                        />

                    </div>
                </div>
                
                
            </div>
        </section>
    );
  }
 