import React from 'react';
import aboutImage from "../../assets/images/about/aaron.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css";
import pdf from "../../assets/images/resume/resume_rosenblatt.pdf"

function About() {
    return (
        <section>
            <h1 class="about">About Me</h1>
            <img src={aboutImage} className="aboutimg" style={{ width: "20%" }} alt="aaron" />
            <div className="my-2">
            <p class="abouttext">
                Full stack web developer leveraging background in photojournalism to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the Berkeley Coding Boot Camp. Innovative problem-solver who is passionate about developing apps. Strengths in creativity, teamwork, meeting deadlines and building projects from visualization to execution.
            </p>
            <p class="resumetext">
                Download my <a href = {pdf} target = "_blank" className="resumelink">Resume</a>
            </p>
            <p class="emailtext">
                E-mail Aaron @ <a href = "mailto: aaronrosenblattphoto@gmail.com" target="_blank" className="emaillink">aaronrosenblattphoto@gmail.com</a>
            </p>
            </div>
        </section>
    );
}

export default About;