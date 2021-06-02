import React from 'react';
import { faMask, faHamburger } from '@fortawesome/free-solid-svg-icons';

import marvel from '../../img/marvel.jpg';
import food from '../../img/food.jpg';

import ProjectItem from '../projects/ProjectItem';

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='projects-inner'>
                <ProjectItem
                    name='Marvel Ultimate Team'
                    description='Build a team of Marvel super heroes!'
                    icon={faMask}
                    projectLink='https://lychee-crisp-57990.herokuapp.com/'
                    githubLink='https://github.com/DarthSaul/superhero-app'
                    imgUrl={marvel}
                />
                <ProjectItem
                    name='Food From Friends'
                    description='Share lists of your favorite food recommendations.'
                    icon={faHamburger}
                    projectLink='https://arcane-lowlands-25770.herokuapp.com/'
                    githubLink='https://github.com/DarthSaul/food-from-friends'
                    imgUrl={food}
                />
            </div>
        </div>
    );
};

export default Projects;
