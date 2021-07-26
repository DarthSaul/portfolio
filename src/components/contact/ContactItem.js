import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactItem = ({ icon, link }) => {
    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='contact-item'
        >
            <FontAwesomeIcon
                icon={icon}
                className='contact-item-icon'
                size='6x'
            />
        </a>
    );
};

export default ContactItem;
