import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactItem = ({ type, icon, link }) => {
    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='contact-item'
        >
            <p>{type}</p>
            <FontAwesomeIcon icon={icon} className='my' />
        </a>
    );
};

export default ContactItem;
