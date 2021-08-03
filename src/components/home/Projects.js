import React from 'react';

import ProjectItem from '../projects/ProjectItem';

import projects from '../../utilities/projects';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    AOS.init();

    return (
        <div className='projects-wrapper'>
            <div className='container py-5 mt-5'>
                <div className='row justify-content-center px-5'>
                    {projects.map((item, ind) => (
                        <div
                            className='col-10 col-md-7 col-lg-6 mb-5 '
                            key={ind}
                            data-aos='fade-right'
                            data-aos-duration='1500'
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
        </div>
    );
};

export default Projects;
