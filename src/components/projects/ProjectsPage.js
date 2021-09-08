import React, { useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { NavContext } from '../../contexts/NavContext';

import ProjectItem from './ProjectItem';
import projects from '../../utilities/projects';

const ProjectsPage = () => {
    const { setActivePage } = useContext(NavContext);

    useEffect(() => {
        setActivePage('Projects');
    }, [setActivePage]);

    const tl = gsap.timeline({
        defaults: {
            duration: 1
        }
    });

    tl.from('.projects-page-container', {
        x: 125,
        opacity: 0
    });

    return (
        <>
            <div className='projects-page-wrapper'>
                <div className='projects-page-container'>
                    {projects.map((item, ind) => (
                        <div className='project-showcase-wrapper' key={ind}>
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

export default ProjectsPage;
