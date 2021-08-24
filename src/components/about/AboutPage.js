import React, { useContext, useEffect } from 'react';

import { NavContext } from '../../contexts/NavContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contactInfo from '../../utilities/contactInfo';

import '../../About.css';

const AboutPage = () => {
    const { setActivePage } = useContext(NavContext);

    useEffect(() => {
        setActivePage('About');
    }, [setActivePage]);

    return (
        <>
            <div className='about-page-wrapper'>
                <div className='about-page-container'>
                    <div className='about-card'>
                        <p>
                            Hello, I'm Saul. A full-stack developer based in
                            Pittsburgh.
                        </p>
                    </div>
                    <div className='about-card'>
                        <p className='desc'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Assumenda, numquam veniam corporis fugit
                            nesciunt consequuntur facilis eius repellendus, amet
                            libero facere, dolor debitis? Doloribus ipsa eaque
                            pariatur fugiat tempore consectetur.
                        </p>
                    </div>

                    <div className='about-card'>
                        <div className='flex'>
                            <h3>Want to chat?</h3>
                            <div className='about-page-links'>
                                {contactInfo.map((item, ind) => (
                                    <a
                                        key={ind}
                                        href={item.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='contact-item'
                                    >
                                        <FontAwesomeIcon icon={item.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
