import React from 'react';
import { faMask, faHamburger } from '@fortawesome/free-solid-svg-icons';

import marvel from '../../img/marvel.jpg';
import food from '../../img/food.jpg';

import Navbar from '../layout/Navbar';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <>
            <Navbar active={'Projects'} />
            <div className='container'>
                <div className='projects-container'>
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
                        description='Share lists of food recommendations from your favorite cities.'
                        icon={faHamburger}
                        projectLink='https://arcane-lowlands-25770.herokuapp.com/'
                        githubLink='https://github.com/DarthSaul/food-from-friends'
                        imgUrl={food}
                    />
                </div>
            </div>
        </>
    );
};

export default Projects;
