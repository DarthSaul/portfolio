import React from 'react';
import Button from 'react-bootstrap/Button';
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
    return (
        <a
            href={projectLink}
            target='_blank'
            rel='noopener noreferrer'
            className='project-item d-flex flex-column justify-content-center align-items-center m-3'
            style={divStyle}
        >
            <div className='project-item-inner d-flex flex-column justify-content-center align-items-center p-2'>
                <p className='fw-bold'>{name}</p>
                <FontAwesomeIcon icon={icon} className='mb-3 fs-1' />
                <p className='project-description text-center'>{description}</p>
                <Button
                    href={githubLink}
                    variant='secondary'
                    className='my-1 fs-6 px-3 fw-light'
                    target='_blank'
                    type='button'
                >
                    View the code
                </Button>
            </div>
        </a>
    );
};

export default ProjectItem;
