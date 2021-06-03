import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../layout/Navbar';

const ProjectsPage = () => {
    return (
        <>
            <div className='contact-page'>
                <Navbar active={'Contact'} />

                <h1>
                    <FontAwesomeIcon icon={faWrench} /> Under construction...
                </h1>
            </div>
        </>
    );
};

export default ProjectsPage;
