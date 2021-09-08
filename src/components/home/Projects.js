import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ProjectItem from '../projects/ProjectItem';
import projects from '../../utilities/projects';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    AOS.init();

    return (
        <>
            <div className='projects-page-wrapper' id='projects'>
                <div className='projects-page-container'>
                    {projects.map((item, ind) => (
                        <div
                            className='project-showcase-wrapper'
                            key={ind}
                            data-aos='fade'
                            data-aos-duration='500'
                        >
                            <ProjectItem
                                name={item.name}
                                headline={item.headline}
                                icon={item.icon}
                                projectLink={item.projectLink}
                                githubLink={item.githubLink}
                                imgUrl={item.imgUrl}
                            />
                            <div className='project-showcase-content'>
                                <p className='project-headline'>{item.desc}</p>
                                {item.bullets &&
                                    item.bullets.map((el, index) => (
                                        <p className='bullet' key={index}>
                                            <FontAwesomeIcon
                                                icon={faChevronRight}
                                                className='me-2'
                                            />
                                            {el}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
