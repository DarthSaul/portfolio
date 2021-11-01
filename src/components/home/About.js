import React from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faJsSquare,
    faCss3Alt,
    faReact,
    faNode,
    faGitAlt,
    faVuejs
} from '@fortawesome/free-brands-svg-icons';

import contactInfo from '../../utilities/contactInfo';

import '../../About.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
    AOS.init();

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
            <div className='about-page-wrapper' id='about'>
                <div className='about-page-container'>
                    <div className='about-card'>
                        <div className='title'>
                            <p>Hi! My name is Saul Graves.</p>
                        </div>
                        <p>
                            I'm a{' '}
                            <span className='call-out'>
                                full-stack developer
                            </span>{' '}
                            creating{' '}
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
                                <div className='skill'>
                                    <FontAwesomeIcon icon={faHtml5} />
                                </div>
                                <div className='skill'>
                                    <FontAwesomeIcon icon={faCss3Alt} />
                                </div>
                                <div className='skill'>
                                    <FontAwesomeIcon icon={faJsSquare} />
                                </div>
                                <div className='skill'>
                                    <FontAwesomeIcon icon={faReact} />
                                </div>
                                <div className='skill'>
                                    <FontAwesomeIcon icon={faVuejs} />
                                </div>
                                <div className='skill'>
                                    <FontAwesomeIcon icon={faNode} />
                                </div>
                                <div className='skill'>
                                    <FontAwesomeIcon icon={faGitAlt} />
                                </div>
                                <div className='skill'>
                                    <img
                                        src='https://res.cloudinary.com/darthsaul/image/upload/v1635794376/Portfolio/d3_logo_zonxch.svg'
                                        alt=''
                                    />
                                </div>
                                <div className='skill'>
                                    <img
                                        src='https://res.cloudinary.com/darthsaul/image/upload/w_150/v1631897940/Portfolio/bootstrap-logo-black_lnusiz.svg'
                                        alt=''
                                    />
                                </div>
                                <div className='skill'>
                                    <img
                                        src='https://res.cloudinary.com/darthsaul/image/upload/w_150/v1631898595/Portfolio/mongo_db.svg'
                                        alt=''
                                    />
                                </div>
                                <div className='skill'>
                                    <img
                                        src='https://res.cloudinary.com/darthsaul/image/upload/v1631899067/Portfolio/sql_bhht5t.svg'
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='about-card col'>
                            <p className='desc'>
                                I began MERN stack development when I decided I
                                wanted to create{' '}
                                <span className='call-out'>
                                    immersive digital experiences
                                </span>{' '}
                                that are accessible to anyone at anytime. I
                                obsess over clean, efficient, and well-designed
                                backend architecture. I love bringing awesome
                                programs to the frontend user and am passionate
                                about building responsive UX/UI.
                            </p>
                            <p className='email'>
                                Want to chat?{' '}
                                <a
                                    href='mailto:graves.saul@gmail.com'
                                    className='call-out'
                                >
                                    Shoot me an email.
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='card-row-two'>
                        <div className='about-card'>
                            <p className='desc'>
                                When I'm not coding, I'm brewing a lot of{' '}
                                <a
                                    href='https://ancient-cove-69346.herokuapp.com/'
                                    className='proj-link'
                                >
                                    coffee
                                </a>
                                , finding{' '}
                                <a
                                    href='https://arcane-lowlands-25770.herokuapp.com/'
                                    className='proj-link'
                                >
                                    delicious food
                                </a>
                                , or playing ultimate frisbee. I'm fascinated by
                                the future of cities and our relationship with
                                them. My favorite movie is a{' '}
                                <a
                                    href='https://calm-mountain-15835.herokuapp.com/home'
                                    className='proj-link'
                                >
                                    1997 animated classic.
                                </a>
                            </p>
                        </div>
                        <div className='about-card'>
                            <div className='flex'>
                                <h4>
                                    <span className='call-out'>
                                        Let's get in touch
                                    </span>
                                </h4>
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
