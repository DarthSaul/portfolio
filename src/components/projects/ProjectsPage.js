import React, { useContext, useEffect } from 'react';
import { gsap } from 'gsap';

import { NavContext } from '../../contexts/NavContext';

import ProjectItem from './ProjectItem';
import projects from '../../utilities/projects';

import 'aos/dist/aos.css';

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

    tl.from('.projects-wrapper .container', {
        y: -75,
        opacity: 0
    });

    return (
        <>
            <div className='projects-wrapper'>
                <div className='container'>
                    {projects.map((item, ind) => (
                        <div className='project-item-wrapper' key={ind}>
                            <ProjectItem
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                projectLink={item.projectLink}
                                githubLink={item.githubLink}
                                imgUrl={item.imgUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;
