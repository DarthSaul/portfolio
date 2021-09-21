import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

import contactInfo from '../../utilities/contactInfo';

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
        <div className='about-wrapper' id='home'>
            <div className='container'>
                <div className='about-img-wrapper'>
                    <img
                        src='https://res.cloudinary.com/darthsaul/image/upload/v1631887548/Portfolio/profile_shot_ij0pnu.png'
                        alt='profile'
                        className='about-img'
                    />
                </div>
                <div className='about-content'>
                    <p className='headline'>
                        Hello, I'm <span>Saul.</span>
                    </p>

                    <p className='desc'>
                        I'm a passionate{' '}
                        <strong>full-stack web developer</strong> building
                        RESTful web APIs alongside fantastic frontend
                        experiences. While I'm based in Pittsburgh, I love to
                        work across the globe.
                        <a href='#projects'>
                            You can check out my latest projects below.
                        </a>
                    </p>
                    <div className='about-links-container'>
                        <a href='#about' className='more-about'>
                            <FontAwesomeIcon icon={faChevronRight} /> More about
                            Saul
                        </a>
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
