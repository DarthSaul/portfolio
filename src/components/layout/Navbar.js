import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faPencilRuler,
    faUserNinja
} from '@fortawesome/free-solid-svg-icons';
import { NavContext } from '../../contexts/NavContext';

const Navbar = () => {
    const navItems = [
        { name: 'Home', path: '/', icon: faHome },
        { name: 'Projects', path: '/projects', icon: faPencilRuler },
        { name: 'About', path: '/about', icon: faUserNinja }
        // { name: 'Contact', path: '/contact', icon: faAddressBook }
    ];
    const { page } = useContext(NavContext);
    return (
        <nav className='vert-navbar'>
            <ul>
                {navItems.map((el, ind) => (
                    <li key={ind}>
                        <Link
                            to={el.path}
                            className={
                                page === el.name
                                    ? 'vert-nav-link active'
                                    : 'vert-nav-link'
                            }
                        >
                            <FontAwesomeIcon
                                icon={el.icon}
                                className='nav-icon'
                            />{' '}
                            <span>{el.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
