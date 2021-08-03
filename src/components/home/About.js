import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import profileShot from '../../img/profile_shot.png';

import contactInfo from '../../utilities/contactInfo';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init();

    return (
        <div className='about-wrapper'>
            <div
                className='container'
                data-aos='fade-up'
                data-aos-duration='1500'
            >
                <div className='row mx-lg-3'>
                    <div className='col-8 col-lg-3 my-4 mx-auto d-flex align-items-center'>
                        <img
                            src={profileShot}
                            alt=''
                            className='about-img w-100'
                        />
                    </div>
                    <div className='about-content col-8 col-lg-9 d-flex flex-column justify-content-between my-4 mx-auto'>
                        <h3 className='fs-2'>
                            Hello, I'm Saul Graves. A full-stack developer based
                            in Pittsburgh, PA.
                        </h3>
                        <p className='fs-5 my-3'>
                            I'm a self-taught web developer with experience
                            building MERN Stack applications. I love to create,
                            learn, and have a deep relationship with coffee. You
                            can check out my work below.
                        </p>
                        <div className='about-links-container d-flex justify-content-between align-items-center fs-5 fw-light'>
                            <Link to='/about' className='more-about'>
                                <FontAwesomeIcon icon={faChevronRight} /> More
                                about Saul
                            </Link>
                            <div>
                                {contactInfo.map((item, ind) => (
                                    <a
                                        key={ind}
                                        href={item.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='fs-5 pe-3'
                                    >
                                        <FontAwesomeIcon icon={item.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
