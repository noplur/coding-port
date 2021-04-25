import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
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
  
    <Card style={{ width: '18rem' }} key={index} className="box csstest">
          <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
          <Card.Body>
    <Card.Title>{card.name}</Card.Title>
    <Card.Text>
      {card.description}
    </Card.Text>
      <a href={card.githublink} target="_blank" className="githublink"><Card.Text>
        {card.name} on GitHub
        </Card.Text></a>
      <a href={card.projectlink} target="_blank"><Card.Text>
        {card.name} Live Site
        </Card.Text></a>
    </Card.Body>
    </Card>
  
  )
}

    return <div className="grid"> {photos.map(renderCard)}</div>
    
    
};

// const [photos] = useState([
//     {
//         name: 'Bart Community',
//         category: 'project',
//         description: 'A social page for BART users',
//     },
//     {
//         name: 'Musak',
//         category: 'project',
//         description: 'A social page for music',
//     },
//     {
//         name: 'Re-Markable High-Tek Blog',
//         category: 'project',
//         description: 'A high-tech blog',
//     },
//     {
//         name: 'Weather App',
//         category: 'project',
//         description: 'A weather app',
//     },
//     {
//         name: 'On-Point Note Taker',
//         category: 'project',
//         description: 'A note-taking app',
//     },
//     {
//         name: 'Code Quiz',
//         category: 'project',
//         description: 'A quiz on coding',
//     }
// ]);

//     return (
//         <div>
//           <div className="test">
          
//             {photos.map((image, i) => (
//               <img
//                 src={require(`../../assets/images/project/${i}.jpg`).default}
//                 alt={image.name}
//                 className="card-img-top"
//                 key={image.name}
//               />
//             ))}
            
//           </div>
//         </div>
//       );
// };

export default ProjectList;