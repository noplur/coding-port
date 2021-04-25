import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap"


const ProjectList = ({ category }) => {

  const [photos] = useState([
    {
        image: require(`../../assets/images/project/0.jpg`).default,
        name: 'Bart Community',
        category: 'project',
        description: 'A social page for BART users',
    },
    {
        image: require(`../../assets/images/project/1.jpg`).default,
        name: 'Musak',
        category: 'project',
        description: 'A social page for music',
    },
    {
        image: require(`../../assets/images/project/2.jpg`).default,
        name: 'Re-Markable High-Tek Blog',
        category: 'project',
        description: 'A high-tech blog',
    },
    {
        image: require(`../../assets/images/project/3.jpg`).default,
        name: 'Weather App',
        category: 'project',
        description: 'A weather app',
    },
    {
        image: require(`../../assets/images/project/4.jpg`).default,
        name: 'On-Point Note Taker',
        category: 'project',
        description: 'A note-taking app',
    },
    {
        image: require(`../../assets/images/project/5.jpg`).default,
        name: 'Code Quiz',
        category: 'project',
        description: 'A quiz on coding',
    }
]);

const renderCard = (card, index) => {
  return (
  <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
          <Card.Body>
    <Card.Title>{card.name}</Card.Title>
    <Card.Text>
      {card.description}
    </Card.Text>
    </Card.Body>
    </Card>
  )
}

    return <div className="test"> {photos.map(renderCard)}</div>
       
    
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