import React from 'react';
import pdf from "../../assets/images/resume/resume_rosenblatt.pdf"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./resume.css"


function Resume() {
    return (
        <section>
                <h1 id="resume" className="resume">Resume</h1>
                <h2 className="download">
                Download my <a href = {pdf} target = "_blank" className="resume-link">Resume</a>
                </h2>
                <h3 className="frontend">Front-end Skills</h3>
                    <p1 className="list-skill">* HTML</p1><br />
                    <p2 className="list-skill">* CSS</p2><br />
                    <p3 className="list-skill">* JavaScript</p3><br />
                    <p4 className="list-skill">* jQuery</p4><br />
                    <p5 className="list-skill">* ReactJS</p5>
                <h3 className="backend">Back-end Skills</h3>
                    <p1 className="list-skill">* MongoDB</p1><br />
                    <p2 className="list-skill">* MySQL</p2><br />
                    <p3 className="list-skill">* Express</p3><br />
                    <p4 className="list-skill">* Node Js</p4><br />             
                </section>
    );
}

export default Resume;