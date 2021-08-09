import React, { useContext, useEffect } from 'react';

import { NavContext } from '../../contexts/NavContext';

import ProjectItem from './ProjectItem';
import projects from '../../utilities/projects';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsPage = () => {
    const { setActivePage } = useContext(NavContext);

    useEffect(() => {
        setActivePage('Projects');
    }, [setActivePage]);

    AOS.init();

    return (
        <>
            <div className='projects-wrapper py-4'>
                <div
                    className='container row justify-content-evenly my-5'
                    data-aos='fade-right'
                    data-aos-duration='1500'
                >
                    {projects.map((item, ind) => (
                        <div
                            className='col-10 col-md-7 col-lg-5 mb-5 mx-3'
                            key={ind}
                        >
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
