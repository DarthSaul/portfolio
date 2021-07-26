import React from 'react';
import Button from 'react-bootstrap/Button';
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
        backgroundSize: `200%`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div
            className='d-flex flex-column justify-content-center align-items-center text-white text-center project-item'
            style={divStyle}
        >
            <a
                href={projectLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-decoration-none text-white'
            >
                <p className='fs-2 project-title'>{name}</p>
            </a>
            <FontAwesomeIcon icon={icon} className='mb-3' size='4x' />
            <p className='fs-4'>{description}</p>
            <a
                href={githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='mx-auto mt-3'
            >
                <Button
                    variant='success'
                    className='btn btn-lg fs-5 px-4 fw-light mt-2'
                    target='_blank'
                    type='button'
                >
                    <FontAwesomeIcon icon={faGithub} className='me-2' />
                    GitHub
                </Button>
            </a>
        </div>
    );
};

export default ProjectItem;
