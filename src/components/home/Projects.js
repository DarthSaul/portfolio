import React from 'react';

import ProjectItem from '../projects/ProjectItem';

import projects from '../../utilities/projects';

const Projects = () => {
    return (
        <div className='projects-wrapper d-flex justify-content-center align-items-center p-3 mb-3'>
            <div className='projects-inner d-flex flex-wrap justify-content-center align-items-center w-75'>
                {projects.map((item, ind) => (
                    <ProjectItem
                        key={ind}
                        name={item.name}
                        description={item.description}
                        icon={item.icon}
                        projectLink={item.projectLink}
                        githubLink={item.githubLink}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
