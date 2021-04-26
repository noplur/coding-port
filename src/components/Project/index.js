import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./project.css"

function Project(props) {
    const { currentCategory } = props;
    return (
        <section className="portfolio">
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>   
            <ProjectList category={currentCategory.name} />
        </section>
    );
}

export default Project;