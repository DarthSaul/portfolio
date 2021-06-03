import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectItem = ({
    name,
    icon,
    projectLink,
    githubLink,
    description,
    imgUrl
}) => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imgUrl})`,
        backgroundSize: `140%`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    const handleClick = `location.href='${githubLink}'`;
    return (
        <a
            href={projectLink}
            target='_blank'
            rel='noopener noreferrer'
            className='project-item'
            style={divStyle}
        >
            <div className='project-item-content'>
                <p>{name}</p>
                <FontAwesomeIcon icon={icon} className='my' />
                <p className='project-description'>{description}</p>
                <button
                    onClick={() => handleClick}
                    className='btn my-1'
                    type='button'
                >
                    View the code
                </button>
            </div>
        </a>
    );
};

export default ProjectItem;
