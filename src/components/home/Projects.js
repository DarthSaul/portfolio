import React from 'react';

import ProjectItem from '../projects/ProjectItem';

import projects from '../../utilities/projects';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    AOS.init();

    return (
        <div className='projects-wrapper'>
            <div className='container'>
                {projects.map((item, ind) => (
                    <div
                        key={ind}
                        data-aos='fade'
                        data-aos-duration='500'
                        className='project-item-wrapper'
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
    );
};

export default Projects;
