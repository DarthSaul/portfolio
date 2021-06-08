import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactItem = ({ icon, link, imgUrl }) => {
    const divStyle = {
        backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgb(0, 0, 0)), url(${imgUrl})`,
        backgroundSize: `160%`,
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='contact-item m-4 d-flex justify-content-center align-items-center'
            style={divStyle}
        >
            <FontAwesomeIcon icon={icon} className='contact-item-icon' />
        </a>
    );
};

export default ContactItem;
