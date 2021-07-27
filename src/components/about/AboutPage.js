import React, { useContext, useEffect } from 'react';

import { NavContext } from '../../contexts/NavContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import profileShot from '../../img/profile_shot.png';

import contactInfo from '../../utilities/contactInfo';

const AboutPage = () => {
    const { setActivePage } = useContext(NavContext);

    useEffect(() => {
        setActivePage('About');
    }, [setActivePage]);

    return (
        <>
            <div className='contact-page'>
                <div className='about-wrapper d-flex justify-content-between align-items-center mb-3 p-3'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-9 col-lg-5 my-4'>
                                <img
                                    src={profileShot}
                                    alt=''
                                    className='w-100 about-img'
                                />
                            </div>
                            <div className='about-content col-9 col-lg-7 d-flex flex-column justify-content-evenly my-4'>
                                <h3 className='fs-2'>
                                    Hello, I'm Saul Graves. A full-stack
                                    developer based in Pittsburgh, PA.
                                </h3>
                                <p className='fs-5'>
                                    I'm a self-taught web developer with
                                    experience building MERN Stack applications.
                                    I love to create, learn, and have a deep
                                    relationship with coffee. You can check out
                                    my work below.
                                </p>
                                <div className='about-links-container d-flex justify-content-between align-items-center fs-6 fw-light'>
                                    <div>
                                        {contactInfo.map((item, ind) => (
                                            <a
                                                key={ind}
                                                href={item.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='fs-5 pe-3'
                                            >
                                                <FontAwesomeIcon
                                                    icon={item.icon}
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
