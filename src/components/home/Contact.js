import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ContactItem from '../contact/ContactItem';

import gmail from '../../img/gmail.jpg';
import linkedIn from '../../img/linkedIn.jpg';
import github from '../../img/github.jpg';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-inner'>
                <ContactItem
                    imgUrl={gmail}
                    icon={faEnvelope}
                    link='mailto:graves.saul@gmail.com'
                />
                <ContactItem
                    imgUrl={linkedIn}
                    icon={faLinkedin}
                    link='https://www.linkedin.com/in/saulgraves/'
                />
                <ContactItem
                    imgUrl={github}
                    icon={faGithub}
                    link='https://github.com/DarthSaul'
                />
            </div>
        </div>
    );
};

export default Contact;
