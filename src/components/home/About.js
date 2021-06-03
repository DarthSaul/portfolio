import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import ironMan from '../../img/iron_man.jpg';

const About = () => {
    return (
        <div className='about-wrapper d-flex justify-content-between align-items-center mb-3 p-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4 col-lg-5 d-flex justify-content-between align-items-center my-4 about-img'>
                        <img src={ironMan} alt='' className='w-100' />
                    </div>
                    <div className='col-md-8 col-lg-7 d-flex flex-column justify-content-between my-4'>
                        <h3>
                            Hello, I'm Saul Graves. A full-stack developer based
                            in Pittsburgh.
                        </h3>
                        <p>
                            Here's a bit more about me. Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit. Qui delectus
                            nostrum repudiandae quidem, nobis ipsa perspiciatis
                            numquam iusto eos non hic sequi odit impedit
                            deserunt facere, aliquam inventore magnam ad!
                        </p>
                        <div className='about-links-container'>
                            <Link to='/about' className='more-about'>
                                <FontAwesomeIcon icon={faChevronRight} /> More
                                about Saul
                            </Link>
                            <div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
