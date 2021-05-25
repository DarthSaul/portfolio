import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactItem = ({ type, icon, link }) => {
    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer external'
            className='contact-item'
        >
            <p className='p'>{type}</p>
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

export default ContactItem;
