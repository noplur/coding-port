import React from 'react';
import {Document, Page} from 'react-pdf';
// import pdf from "../../assets/images/resume/rosenblatt_resume.pdf"

function Resume() {
    return (
        <section>
                <h1 id="resume">Resume</h1>
                <embed src="../../assets/images/resume/resume_rosenblatt.pdf" type="application/pdf" width="100%" height="100%"></embed>
                <h2>
                {/* Download my <Document file={require("../../assets/images/resume/rosenblatt_resume.pdf").default} type="application/pdf" target="_blank">resume</Document> */}
                </h2>
                <h3>Front-end Skills</h3>
                    <p1>HTML</p1><br />
                    <p2>CSS</p2><br />
                    <p3>JavaScript</p3><br />
                    <p4>jQuery</p4><br />
                    <p5>ReactJS</p5>
                <h3>Back-end Skills</h3>
                    <p1>MongoDB</p1><br />
                    <p2>MySQL</p2><br />
                    <p3>Express</p3><br />
                    <p4>Node Js</p4><br />             
                </section>
    );
}

export default Resume;