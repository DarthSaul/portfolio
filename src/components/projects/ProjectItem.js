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
        <div
            className='d-flex flex-column justify-content-around text-center p-5 project-item'
            style={divStyle}
        >
            <a
                href={projectLink}
                target='_blank'
                rel='noopener noreferrer'
                className='d-flex flex-column align-items-center text-decoration-none text-white'
            >
                <p className='fs-2'>{name}</p>
                <FontAwesomeIcon icon={icon} className='mb-3' size='4x' />
                <p className='fs-4'>{description}</p>
            </a>
            <a
                href={githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='mx-auto'
            >
                <Button
                    variant='success'
                    className='btn btn-lg fs-5 px-3 fw-light'
                    target='_blank'
                    type='button'
                >
                    View the code
                </Button>
            </a>
        </div>
    );
};

export default ProjectItem;
