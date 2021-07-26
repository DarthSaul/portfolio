import React from 'react';

import ProjectItem from '../projects/ProjectItem';

import projects from '../../utilities/projects';

const Projects = () => {
    return (
        <div className='projects-wrapper row justify-content-center'>
            {projects.map((item, ind) => (
                <div className='col-4 my-auto mx-3'>
                    <ProjectItem
                        key={ind}
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
    );
};

export default Projects;
