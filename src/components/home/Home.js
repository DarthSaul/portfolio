import React from 'react';

import Main from './Main';
import Projects from './Projects';
import About from './About';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <Main />
                <Projects />
                <About />
            </div>
        </>
    );
};

export default Home;
