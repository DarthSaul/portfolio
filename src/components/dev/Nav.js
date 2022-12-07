import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import OverlayMenu from './OverlayMenu';
import '../../css/Nav.css';

const HoNav = () => {
	const [menu, toggleMenu] = useState(false);
	let activeClassName = 'active-nav-link';

	return (
		<nav className="top-navbar">
			<div className="row justify-content-end py-4 text-white">
				<div className="d-none d-md-block col-auto ps-4">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? activeClassName
								: undefined
						}
					>
						Home
					</NavLink>
				</div>
				<div className="d-none d-md-block col-auto ps-4">
					<NavLink
						to="/projects"
						className={({ isActive }) =>
							isActive
								? activeClassName
								: undefined
						}
					>
						Work
					</NavLink>
				</div>
				<div className="d-none d-md-block col-auto ps-4">
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive
								? activeClassName
								: undefined
						}
					>
						About
					</NavLink>
				</div>
				<div className="d-md-none col-auto pe-3">
					<button
						type="button"
						className="btn btn-transparent p-0 text-muted"
						onClick={() =>
							toggleMenu(!menu)
						}
					>
						Menu
					</button>
				</div>
			</div>
			{menu && <OverlayMenu toggle={toggleMenu} />}
		</nav>
	);
};

export default HoNav;
