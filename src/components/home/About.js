import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import profileShot from '../../img/profile_shot.png';

import contactInfo from '../../utilities/contactInfo';

const About = () => {
    return (
        <div className='about-wrapper d-flex justify-content-between align-items-center mb-3 p-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-5 d-flex justify-content-between align-items-center my-4 about-img'>
                        <img
                            src={profileShot}
                            alt=''
                            className='w-100 rounded about-img'
                        />
                    </div>
                    <div className='about-content col-md-8 col-lg-7 d-flex flex-column justify-content-evenly my-4'>
                        <h3 className='fs-2'>
                            Hello, I'm Saul Graves. A full-stack developer based
                            in Pittsburgh, PA.
                        </h3>
                        <p className='fs-5'>
                            I'm an innately curious self-taught web developer
                            with experience building applications in the MERN
                            Stack. I love to learn, create and have a deep
                            relationship with coffee. You can check out my work
                            below.
                        </p>
                        <div className='about-links-container d-flex justify-content-between align-items-center fs-6 fw-light'>
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
