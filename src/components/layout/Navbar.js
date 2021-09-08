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
        { name: 'Home', path: '/portfolio', icon: faHome },
        { name: 'Projects', path: '/portfolio/projects', icon: faPencilRuler },
        { name: 'About', path: '/portfolio/about', icon: faUserNinja }
    ];
    const { page } = useContext(NavContext);
    return (
        <nav className='navbar'>
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
