import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import "./projectList.css"


const ProjectList = ({ category }) => {

  const [photos] = useState([
    {
      image: require(`../../assets/images/project/0.jpg`).default,
      name: 'Kathryn Hansen Art Portfolio',
      category: 'project',
      description: 'GraphQL, React, MongoDB',
      projectlink: 'https://kathryn-hansen.herokuapp.com/',
      githublink: 'https://github.com/noplur/kathryn-hansen'
  },
    {
        image: require(`../../assets/images/project/1.jpg`).default,
        name: 'Bart Community',
        category: 'project',
        description: 'Express-Handlebars',
        projectlink: 'https://bort-community.herokuapp.com/',
        githublink: 'https://github.com/noplur/Bort-Community'
    },
    {
        image: require(`../../assets/images/project/2.jpg`).default,
        name: 'Musicana',
        category: 'project',
        description: 'JavaScript/jQuery/Foundation',
        projectlink: 'https://noplur.github.io/team4-10-music/',
        githublink: 'https://github.com/noplur/team4-10-music'
    },
    {
        image: require(`../../assets/images/project/3.jpg`).default,
        name: 'High-Tek Blog',
        category: 'project',
        description: 'MVC/Handlebars.js/Express-Session',
        projectlink: 'https://rosenblatt-hi-tek-blog.herokuapp.com/',
        githublink: 'https://github.com/noplur/re-markable-high-tech-blog'
    },
    {
        image: require(`../../assets/images/project/4.jpg`).default,
        name: 'Weather Dashboard',
        category: 'project',
        description: 'JavaScript/jQuery/Bootstrap',
        projectlink: 'https://noplur.github.io/weather-dashboard/',
        githublink: 'https://github.com/noplur/weather-dashboard'
    },
    {
        image: require(`../../assets/images/project/5.jpg`).default,
        name: 'On-Point Note Taking',
        category: 'project',
        description: 'Express.js',
        projectlink: 'https://rosenblatt-onpoint-notetaking.herokuapp.com/',
        githublink: 'https://github.com/noplur/onPoint-Note-Taking'
    }
]);

const renderCard = (card, index) => {
  return (
  
    <Card style={{ width: '18rem' }} key={index} className="box">
          <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
          <Card.ImgOverlay className="csstest">
            <div className="links">
    <a href={card.projectlink} target="_blank">
    <Card.Title><div className="projectlink">{card.name}</div></Card.Title></a>
      <a href={card.githublink} target="_blank"><Card.Text>
        <div className="githubcard">
      <i class="fab fa-github"></i></div>
      </Card.Text></a>
      <Card.Text><div className="projectdescription">
      {card.description}</div>
    </Card.Text>
        </div>
    </Card.ImgOverlay>
    </Card>
  )
}

    return <div className="grid"> {photos.map(renderCard)}</div>
    
    
};

export default ProjectList;