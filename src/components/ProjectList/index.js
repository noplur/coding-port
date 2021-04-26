import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import "./projectList.css"


const ProjectList = ({ category }) => {

  const [photos] = useState([
    {
        image: require(`../../assets/images/project/0.jpg`).default,
        name: 'Bart Community',
        category: 'project',
        description: 'A social page for BART users',
        projectlink: 'https://bort-community.herokuapp.com/',
        githublink: 'https://github.com/noplur/Bort-Community'
    },
    {
        image: require(`../../assets/images/project/1.jpg`).default,
        name: 'Musak',
        category: 'project',
        description: 'A social page for music',
        projectlink: 'https://bort-community.herokuapp.com/',
        githublink: 'https://github.com/noplur/Bort-Community'
    },
    {
        image: require(`../../assets/images/project/2.jpg`).default,
        name: 'Re-Markable High-Tek Blog',
        category: 'project',
        description: 'A high-tech blog',
        projectlink: 'https://bort-community.herokuapp.com/',
        githublink: 'https://github.com/noplur/Bort-Community'
    },
    {
        image: require(`../../assets/images/project/3.jpg`).default,
        name: 'Weather App',
        category: 'project',
        description: 'A weather app',
        projectlink: 'https://bort-community.herokuapp.com/',
        githublink: 'https://github.com/noplur/Bort-Community'
    },
    {
        image: require(`../../assets/images/project/4.jpg`).default,
        name: 'On-Point Note Taker',
        category: 'project',
        description: 'A note-taking app',
        projectlink: 'https://bort-community.herokuapp.com/',
        githublink: 'https://github.com/noplur/Bort-Community'
    },
    {
        image: require(`../../assets/images/project/5.jpg`).default,
        name: 'Code Quiz',
        category: 'project',
        description: 'A quiz on coding',
        projectlink: 'https://bort-community.herokuapp.com/',
        githublink: 'https://github.com/noplur/Bort-Community'
    }
]);

const renderCard = (card, index) => {
  return (
  
    <Card style={{ width: '18rem' }} key={index} className="box">
          <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
          <Card.ImgOverlay className="csstest">
            <div className="links">
    <a href={card.projectlink} target="_blank">
    <Card.Title>{card.name}</Card.Title></a>
      <a href={card.githublink} target="_blank"><Card.Text>
      <i class="fab fa-github"></i>
      </Card.Text></a>
      <Card.Text>
      {card.description}
    </Card.Text>
        </div>
    </Card.ImgOverlay>
    </Card>
  )
}

    return <div className="grid"> {photos.map(renderCard)}</div>
    
    
};

export default ProjectList;