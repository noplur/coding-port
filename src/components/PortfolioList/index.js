import React, { useState } from 'react';


const PortfolioList = ({ category }) => {

const [photos] = useState([
    {
        name: 'Bart Community',
        category: 'portfolio',
        description: 'A social page for BART users',
    },
    {
        name: 'Musak',
        category: 'portfolio',
        description: 'A social page for music',
    },
    {
        name: 'Re-Markable High-Tek Blog',
        category: 'portfolio',
        description: 'A high-tech blog',
    },
    {
        name: 'Weather App',
        category: 'portfolio',
        description: 'A weather app',
    },
    {
        name: 'On-Point Note Taker',
        category: 'portfolio',
        description: 'A note-taking app',
    },
    {
        name: 'Code Quiz',
        category: 'portfolio',
        description: 'A quiz on coding',
    }
]);

    return (
        <div>
          <div className="flex-row">
            {photos.map((image, i) => (
              <img
                src={require(`../../assets/images/portfolio/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
};

export default PortfolioList;