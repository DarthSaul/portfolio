import React, { useContext, useEffect } from 'react';

import { NavContext } from '../../contexts/NavContext';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../layout/Footer';

const Home = () => {
    const { setActivePage } = useContext(NavContext);

    useEffect(() => {
        setActivePage('Home');
    }, [setActivePage]);

    return (
        <>
            <div className='home-container'>
                <About />
                <Projects id='projects' />
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default Home;
