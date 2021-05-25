import React from 'react';
import {
    faLinkedin,
    faInstagram,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../layout/Navbar';
import ContactItem from './ContactItem';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='contact-container'>
                    <ContactItem
                        type='Email'
                        icon={faEnvelope}
                        link='mailto:graves.saul@gmail.com'
                    />
                    <ContactItem
                        type='LinkedIn'
                        icon={faLinkedin}
                        link='linkedin.com/saulgraves'
                    />
                    <ContactItem
                        type='GitHub'
                        icon={faGithub}
                        link='github.com/DarthSaul'
                    />
                    <ContactItem
                        type='Instgram'
                        icon={faInstagram}
                        link='instagram.com'
                    />
                </div>
            </div>
        </>
    );
};

export default Contact;
