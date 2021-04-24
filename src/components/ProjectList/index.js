import React, { useState } from 'react';


const ProjectList = ({ category }) => {

const [photos] = useState([
    {
        name: 'Bart Community',
        category: 'project',
        description: 'A social page for BART users',
    },
    {
        name: 'Musak',
        category: 'project',
        description: 'A social page for music',
    },
    {
        name: 'Re-Markable High-Tek Blog',
        category: 'project',
        description: 'A high-tech blog',
    },
    {
        name: 'Weather App',
        category: 'project',
        description: 'A weather app',
    },
    {
        name: 'On-Point Note Taker',
        category: 'project',
        description: 'A note-taking app',
    },
    {
        name: 'Code Quiz',
        category: 'project',
        description: 'A quiz on coding',
    }
]);

    return (
        <div>
          <div className="flex-row">
            {photos.map((image, i) => (
              <img
                src={require(`../../assets/images/project/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
};

export default ProjectList;