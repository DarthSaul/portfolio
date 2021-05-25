import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactItem = ({ type, icon, link }) => {
    return (
        <div className='contact-item'>
            <p className='p'>{type}</p>
            <a href={link} target='_blank' rel='noopener noreferrer external'>
                <FontAwesomeIcon icon={icon} />
            </a>
        </div>
    );
};

export default ContactItem;
