import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faPencilRuler,
    faUserNinja,
    faAddressBook
} from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ active }) => {
    const navItems = [
        { name: 'Home', path: '/', icon: faHome },
        { name: 'Projects', path: '/projects', icon: faPencilRuler },
        { name: 'About', path: '/about', icon: faUserNinja },
        { name: 'Contact', path: '/contact', icon: faAddressBook }
    ];
    return (
        <nav className='vert-navbar'>
            <ul>
                {navItems.map((el, ind) => (
                    <li key={ind}>
                        <Link
                            to={el.path}
                            className={
                                active === el.name
                                    ? 'vert-nav-link active'
                                    : 'vert-nav-link'
                            }
                        >
                            <FontAwesomeIcon
                                icon={el.icon}
                                className='nav-icon'
                            />{' '}
                            {el.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
