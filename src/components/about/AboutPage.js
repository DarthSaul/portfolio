import React, { useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faJsSquare,
    faCss3Alt,
    faReact,
    faNode,
    faGitAlt
} from '@fortawesome/free-brands-svg-icons';

import { NavContext } from '../../contexts/NavContext';

import contactInfo from '../../utilities/contactInfo';

import '../../About.css';

const AboutPage = () => {
    const { setActivePage } = useContext(NavContext);

    useEffect(() => {
        setActivePage('About');
    }, [setActivePage]);

    const tl = gsap.timeline({
        defaults: {
            duration: 1
        }
    });

    tl.from('.about-card', {
        x: 125,
        opacity: 0
    });

    return (
        <>
            <div className='about-page-wrapper'>
                <div className='about-page-container'>
                    <div className='about-card'>
                        <div className='title'>
                            <p>Hi! My name is Saul Graves.</p>
                        </div>
                        <p>
                            I'm a{' '}
                            <span className='call-out'>
                                full-stack developer
                            </span>
                            , currently hacking away in Pittsburgh, PA. I create{' '}
                            <span className='call-out'>functional</span>,{' '}
                            <span className='call-out'>accessible</span> and{' '}
                            <span className='call-out'>beautiful</span>{' '}
                            applications for the web.
                        </p>
                    </div>
                    <div className='card-row-one'>
                        <div className='about-card'>
                            <h3>
                                <span className='call-out'>Skills</span>
                            </h3>
                            <div className='skills-box'>
                                <FontAwesomeIcon icon={faHtml5} />
                                <FontAwesomeIcon icon={faCss3Alt} />
                                <FontAwesomeIcon icon={faJsSquare} />
                                <FontAwesomeIcon icon={faReact} />
                                <FontAwesomeIcon icon={faNode} />
                                <FontAwesomeIcon icon={faGitAlt} />
                            </div>
                        </div>
                        <div className='about-card'>
                            <p className='desc'>
                                I started programming because I wanted to create{' '}
                                <span className='call-out'>
                                    immersive digital experiences
                                </span>{' '}
                                that are accessible to anyone at anytime. As the
                                son of an architect, I obsess over designing
                                efficient backend servers. As the son of a
                                writer, I tell exciting stories through
                                meaningful frontend user experiences.
                            </p>
                        </div>
                    </div>

                    <div className='card-row-two'>
                        <div className='about-card'>
                            <p className='desc'>
                                When I'm not coding, I'm brewing{' '}
                                <span className='call-out'>coffee</span> (a
                                lot), playing{' '}
                                <span className='call-out'>
                                    ultimate frisbee
                                </span>
                                , or finding{' '}
                                <span className='call-out'>delicious food</span>
                                . I'm interested in the future of cities and our
                                relationship with them. My favorite movie is
                                animated.
                            </p>
                        </div>
                        <div className='about-card'>
                            <div className='flex'>
                                <h3>
                                    <span className='call-out'>
                                        Want to chat?
                                    </span>
                                </h3>
                                <div className='about-page-links'>
                                    {contactInfo.map((item, ind) => (
                                        <a
                                            key={ind}
                                            href={item.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
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
        </>
    );
};

export default AboutPage;
