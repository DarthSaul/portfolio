import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ active }) => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ];
    return (
        <nav className='navbar'>
            <Link to='/'>
                <FontAwesomeIcon icon={faHome} /> SG
            </Link>
            <ul>
                {navItems.map((el, ind) => (
                    <li key={ind}>
                        <Link
                            to={el.path}
                            className={
                                active === el.name
                                    ? 'nav-link active'
                                    : 'nav-link'
                            }
                        >
                            {el.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
