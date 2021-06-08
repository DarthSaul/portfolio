import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../layout/Navbar';

const AboutPage = () => {
    return (
        <>
            <div className='contact-page'>
                <Navbar active={'About'} />

                <h1>
                    <FontAwesomeIcon icon={faWrench} /> Under construction...
                </h1>
            </div>
        </>
    );
};

export default AboutPage;
