import React from 'react';
import aboutImage from "../../assets/images/about/aaron.jpg";

function About() {
    return (
        <section>
            <h1 id="about">About me</h1>
            <img src={aboutImage} className="my-2" style={{ width: "20%" }} alt="aaron" />
            <div className="my-2">
            <p>
                Full stack web developer leveraging background in photojournalism to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the Berkeley Coding Boot Camp. Innovative problem-solver who is passionate about developing apps. Strengths in creativity, teamwork, meeting deadlines and building projects from visualization to execution.
            </p>
            </div>
        </section>
    );
}

export default About;