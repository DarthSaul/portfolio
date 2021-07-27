import React, { useContext, useEffect } from 'react';

import { NavContext } from '../../contexts/NavContext';

import ProjectItem from './ProjectItem';
import projects from '../../utilities/projects';

const ProjectsPage = () => {
    const { setActivePage } = useContext(NavContext);

    useEffect(() => {
        setActivePage('Projects');
    }, [setActivePage]);

    return (
        <>
            <div className='contact-page py-4'>
                <div className='row justify-content-center my-5'>
                    {projects.map((item, ind) => (
                        <div
                            className='col-10 col-md-7 col-lg-4 mb-5 mx-3'
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
