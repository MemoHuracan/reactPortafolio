import React from "react"
import './about.css'
import ME from '../../assets/images/Me4.jpg';
import { FaLaptopCode } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const About = () => {
    return (
       <section id="about">
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image" />

                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                    <FaLaptopCode className="about__icon"/>
                    <h5>Experience</h5>
                    <small>New Grad</small>
                    </article>

                    <article className="about__card">
                    <IoSchool className="about__icon"/>
                    <h5>Education</h5>
                    <small>CDI College</small>
                    </article>

                    <article className="about__card">
                    <FaGithub className="about__icon"/>
                    <h5>GitHub</h5>
                    <small>Working on it</small>
                    </article>
                </div>

                <p> Hello guys, during my studies in Web and Mobile Application Development I work with different frameworks and programming languages, create
                    databases with MongoDb, MySQL and AWS. Used Java, Python, PHP, Swift, C# to build small programs and apps. In my free time I practice  with
                     C#, Java, Python,  NodeJs, React, Bootstrap. Always learning new stuff, tips and ways to produce a clean code. I like to keep learning by reading 
                    and watching tutorials like OOP and Design Patterns. I aspire to be in a workplace where they can teach me and provide opportunities for meaningful coding experience!
                </p>

                <a href="#contact" className="btn btn-primary" >Open to Work</a>
            </div>
        </div>
       </section>
    )
}

export default About