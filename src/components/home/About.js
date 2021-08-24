import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

import profileShot from '../../img/profile_shot.png';

import contactInfo from '../../utilities/contactInfo';

import 'aos/dist/aos.css';

const About = () => {
    const tl = gsap.timeline({
        defaults: {
            duration: 1.5
        }
    });

    tl.from('.container', {
        y: -125,
        opacity: 0
    });

    return (
        <div className='about-wrapper'>
            <div className='container'>
                <div className='about-img-wrapper'>
                    <img src={profileShot} alt='' className='about-img' />
                </div>
                <div className='about-content'>
                    <p className='headline'>
                        Hello, I'm Saul. A full-stack developer based in
                        Pittsburgh.
                    </p>

                    <p className='desc'>
                        I'm a self-taught web developer with experience building
                        MERN Stack applications. I love to create, learn, and
                        have a deep relationship with coffee. You can check out
                        my work below.
                    </p>
                    <div className='about-links-container'>
                        <Link to='/about' className='more-about'>
                            <FontAwesomeIcon icon={faChevronRight} /> More about
                            Saul
                        </Link>
                        <div className='links-wrapper'>
                            {contactInfo.map((item, ind) => (
                                <a
                                    key={ind}
                                    href={item.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='about-link'
                                >
                                    <FontAwesomeIcon icon={item.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
