import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectItem = ({
    name,
    icon,
    projectLink,
    githubLink,
    description,
    imgUrl
}) => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${imgUrl})`,
        backgroundSize: `150%`,
        backgroundPosition: 'contain',
        backgroundRepeat: 'repeat'
    };
    return (
        <div className='project-item-inner' style={divStyle}>
            <p className='project-title'>{name}</p>
            <p className='project-desc'>{description}</p>
            <a href={projectLink} target='_blank' rel='noopener noreferrer'>
                <button className='project-btn' target='_blank' type='button'>
                    <FontAwesomeIcon icon={icon} className='me-2' />
                    Website
                </button>
            </a>
            <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                <button className='git-btn' target='_blank' type='button'>
                    <FontAwesomeIcon icon={faGithub} className='me-2' />
                    GitHub
                </button>
            </a>
        </div>
    );
};

export default ProjectItem;
