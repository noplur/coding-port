import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
import "./projectList.css";

const ProjectList = ({ category }) => {

  const [photos] = useState([
    {
      image: require(`../../assets/images/project/rosenblattphotoshop.jpg`).default,
      name: 'Aaron Rosenblatt Photo Shop',
      category: 'project',
      description: "A full stack live shop that allows for a user to signup, login, select photographs and purchase prints through Stripe.",
      component: 'MongoDB, Express, React, Node, Stripe',
      projectlink: 'https://rosenblattphotoshop.herokuapp.com/',
      githublink: 'https://github.com/noplur/aaronrosenblattphoto-shop'
    },
    {
      image: require(`../../assets/images/project/0.jpg`).default,
      name: 'Kathryn Hansen Art Portfolio',
      category: 'project',
      description: 'A group-built website for a local artist to reach out to potential customers and sales.',
      component: 'MongoDb, React, GraphQL',
      projectlink: 'https://kathryn-hansen.herokuapp.com/',
      githublink: 'https://github.com/noplur/kathryn-hansen'
    },
    {
      image: require(`../../assets/images/project/1.jpg`).default,
      name: 'Bart Community',
      category: 'project',
      description: 'A group-built app to ease navigation through the BART public transportation system following MVC paradigm.',
      component: 'Express-Handlebars, Sequelize, Express-Session, crypt, Dotenv, Axios',
      projectlink: 'https://bort-community.herokuapp.com/',
      githublink: 'https://github.com/noplur/Bort-Community'
    },
    {
      image: require(`../../assets/images/project/2.jpg`).default,
      name: 'Musicana',
      category: 'project',
      description: 'A group-built app that allows users to discover new music using JavaScript, jQuery, Foundation and the Deezer API library.',
      component: 'JavaScript/jQuery/Foundation',
      projectlink: 'https://noplur.github.io/team4-10-music/',
      githublink: 'https://github.com/noplur/team4-10-music'
    },
    {
      // image: require(`../../assets/images/project/3.jpg`).default,
      // name: 'High-Tek Blog',
      // category: 'project',
      // description: 'A group-built app that allows users to discover new music using JavaScript, jQuery, Foundation and the Deezer API library.',
      // component: 'MVC/Handlebars.js/Express-Session',
      // projectlink: 'https://rosenblatt-hi-tek-blog.herokuapp.com/',
      // githublink: 'https://github.com/noplur/re-markable-high-tech-blog'

      image: require(`../../assets/images/project/3.jpg`).default,
      name: 'Portfolio',
      category: 'project',
      description: 'A portfolio website showing links to samples about my selected projects, information about myself and my skills using React. This is the site you are looking at now.',
      component: 'React, JavaScript',
      projectlink: 'https://noplur.github.io/coding-port/',
      githublink: 'https://github.com/noplur/coding-port'
    },
    {
      image: require(`../../assets/images/project/4.jpg`).default,
      name: 'Weather Dashboard',
      category: 'project',
      description: "Weather dashboard that incorporates third-party APIs using jQuery to show a city's current temperature, humidity, wind speed, uv index and 5-day forecast. Uses Local Storage for persistent data.",
      component: 'JavaScript/jQuery/Bootstrap',
      projectlink: 'https://noplur.github.io/weather-dashboard/',
      githublink: 'https://github.com/noplur/weather-dashboard'
    }
    // {
    //   image: require(`../../assets/images/project/5.jpg`).default,
    //   name: 'Google Book Search',
    //   category: 'project',
    //   description: "A full stack application that uses the Google Books API and allows for a user to search for books, view books, and save or delete them from the database.",
    //   component: 'MongoDB, Express, React, Node',
    //   projectlink: 'https://blatt-booksearch.herokuapp.com/',
    //   githublink: 'https://github.com/noplur/blatt-book-search'
    // }
  ]);

  const renderCard = (card, index) => {
    return (

      <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/80px180" src={card.image} />
        <Card.ImgOverlay className="csstest">
          <div className="links">
            <Card.Title><div className="projecttitle">{card.name}</div></Card.Title>
            <Card.Text><div className="projectdescription">
              {card.description}</div>
            </Card.Text>
            <Card.Text><div className="projectcomponent">
              {card.component}</div>
            </Card.Text>
          </div>
          <div>
            <a href={card.projectlink} target="_blank"><Button className="appbtn">View App</Button></a>
            <a href={card.githublink} target="_blank"><Button className="codebtn">View Code<i class="fab fa-github"></i></Button></a>
          </div>
        </Card.ImgOverlay>
      </Card>

    )
  }

  return <div className="grid"> {photos.map(renderCard)}</div>


};


//test
export default ProjectList;