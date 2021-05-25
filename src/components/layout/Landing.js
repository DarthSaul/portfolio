import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
    return (
        <div className='landing'>
            <header>
                <div>
                    <Link to='/' className='nav-link'>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </div>
                <nav>
                    <Link to='/' className='nav-link active'>
                        Home
                    </Link>
                    <Link to='/' className='nav-link'>
                        Projects
                    </Link>
                    <Link to='/' className='nav-link'>
                        Contact
                    </Link>
                </nav>
            </header>
            <div className='landing-inner'>
                <h1>Hello, world.</h1>
            </div>
        </div>
    );
};

export default Landing;
