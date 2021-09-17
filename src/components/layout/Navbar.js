import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faPencilRuler,
    faUserNinja
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <a href='#home' className='vert-nav-link'>
                        <FontAwesomeIcon icon={faHome} className='nav-icon' />{' '}
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href='#projects' className='vert-nav-link'>
                        <FontAwesomeIcon
                            icon={faPencilRuler}
                            className='nav-icon'
                        />{' '}
                        <span>Projects</span>
                    </a>
                </li>
                <li>
                    <a href='#about' className='vert-nav-link'>
                        <FontAwesomeIcon
                            icon={faUserNinja}
                            className='nav-icon'
                        />{' '}
                        <span>About</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
