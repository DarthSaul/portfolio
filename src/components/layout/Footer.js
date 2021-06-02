import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <h1>Saul Graves</h1>
            {/* <div>some links</div> */}
            <div className='footer-contact'>
                <a href='mailto:graves.saul@gmail.com'>graves.saul@gmail.com</a>
                <div className='footer-links'>
                    <a
                        href='https://www.linkedin.com/in/saulgraves/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='about-link'
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/saulgraves/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='about-link'
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href='mailto:graves.saul@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='about-link'
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
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
