import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectItem = ({
    name,
    icon,
    projectLink,
    githubLink,
    headline,
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
            <p className='project-desc'>{headline}</p>
            <button className='project-btn' target='_blank' type='button'>
                <a
                    href={projectLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='website-link'
                >
                    <FontAwesomeIcon icon={icon} className='website-icon' />
                    Website
                </a>{' '}
            </button>
            <button className='git-btn' target='_blank' type='button'>
                <a
                    href={githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='website-link'
                >
                    <FontAwesomeIcon icon={faGithub} className='website-icon' />
                    GitHub
                </a>
            </button>
        </div>
    );
};

export default ProjectItem;
