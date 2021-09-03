import React from 'react';
// import pdf from "../../assets/images/resume/resume_rosenblatt.pdf"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./skills.css";
import { DiHtml5, DiCss3, DiJavascript1, DiJqueryLogo, DiReact, DiMongodb, DiMysql, DiNodejsSmall, DiGit, DiAws, DiBootstrap, DiGithub, DiVisualstudio, DiNpm } from "react-icons/di";
import { GrGraphQl, GrHeroku } from "react-icons/gr"; 
import { SiSlack, SiJest } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
    return (
        <section>
                <h3 className="frontend">Skills</h3>
                <Container>
                <Row className="row">
            <Col xs={6} md={4}>
        
                    <p1 className="list-skill">* HTML</p1><i className="icon-skill"><DiHtml5 /></i><br />
                    <p2 className="list-skill">* CSS</p2><i className="icon-skill"><DiCss3 /></i><br />
                    <p3 className="list-skill">* JavaScript</p3><i className="icon-skill"><DiJavascript1 /></i><br />
                    <p4 className="list-skill">* GraphQL</p4><i className="icon-skill"><GrGraphQl /></i><br /> 
                    <p4 className="list-skill">* jQuery</p4><i className="icon-skill"><DiJqueryLogo /></i><br />
                    <p5 className="list-skill">* ReactJS</p5><i className="icon-skill"><DiReact /></i><br />
                    <p3 className="list-skill">* Express</p3><br />
                    </Col>
                    <Col xs={6} md={4}>
                    <p3 className="list-skill">* Handlebars.js</p3><br />                
                    <p4 className="list-skill">* Node Js</p4><i className="icon-skill"><DiNodejsSmall /></i><br /> 
                    <p1 className="list-skill">* MongoDB</p1><i className="icon-skill"><DiMongodb /></i><br />
                    <p2 className="list-skill">* MySQL</p2><i className="icon-skill"><DiMysql /></i><br />
                    <p4 className="list-skill">* Git</p4><i className="icon-skill"><DiGit /></i><br /> 
                    <p4 className="list-skill">* AWS</p4><i className="icon-skill"><DiAws /></i><br />                
                    <p4 className="list-skill">* Heroku</p4><i className="icon-skill"><GrHeroku /></i><br />  
                    </Col>
                    <Col xs={6} md={4}>
                    <p4 className="list-skill">* Bootstrap</p4><i className="icon-skill"><DiBootstrap /></i><br /> 
                    <p4 className="list-skill">* Github</p4><i className="icon-skill"><DiGithub /></i><br />
                    <p4 className="list-skill">* Slack</p4><i className="icon-skill"><SiSlack /></i><br /> 
                    <p4 className="list-skill">* Jest</p4><i className="icon-skill"><SiJest /></i><br />
                    <p4 className="list-skill">* Visual Studio</p4><i className="icon-skill"><DiVisualstudio /></i><br /> 
                    <p4 className="list-skill">* NPM</p4><i className="icon-skill"><DiNpm /></i><br />  
                    </Col>
                    </Row>
                    </Container>   
                </section>
    );
}

export default Resume;