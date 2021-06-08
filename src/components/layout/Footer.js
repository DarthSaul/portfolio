import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contactInfo from '../../utilities/contactInfo';

const Footer = () => {
    return (
        <footer>
            <div className='footer-name'>
                <h1>Saul Graves</h1>
            </div>
            <div className='footer-contact'>
                <div>
                    <a
                        href='mailto:graves.saul@gmail.com'
                        className='footer-email'
                    >
                        graves.saul@gmail.com
                    </a>
                </div>
                <div className='footer-links'>
                    {contactInfo.map((item, ind) => (
                        <a
                            key={ind}
                            href={item.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='footer-link'
                        >
                            <FontAwesomeIcon icon={item.icon} />
                        </a>
                    ))}
                </div>
            </div>
            <div className='footer-location'>
                <p>Pittsburgh, PA</p>
                <p>2021</p>
            </div>
        </footer>
    );
};

export default Footer;
