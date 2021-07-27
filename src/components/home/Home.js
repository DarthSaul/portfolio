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
            <div className='home-container p-3'>
                <About />
                <Projects />
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default Home;
