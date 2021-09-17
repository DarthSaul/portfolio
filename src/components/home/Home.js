import React from 'react';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../layout/Footer';

const Home = () => {
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
