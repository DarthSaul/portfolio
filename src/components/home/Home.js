import React from 'react';

import Navbar from '../layout/Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../layout/Footer';

const Home = () => {
    return (
        <>
            <Navbar active={'Home'} />
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
