import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import OverlayMenu from './OverlayMenu';
import '../../css/Nav.css';

const HoNav = () => {
	const [menu, toggleMenu] = useState(false);
	let activeClassName = 'active-nav-link';

	return (
		<>
			<nav className="top-navbar mb-4">
				<div className="row justify-content-between align-items-center py-4">
					<div className="col-auto text-light d-none d-md-block">
						<h2>
							<NavLink to="/">
								Saul{' '}
								<span>
									Graves
								</span>
							</NavLink>
						</h2>
					</div>
					<div className="d-md-none col-auto pe-3">
						<button
							type="button"
							className="btn btn-transparent p-0 text-light"
							onClick={() =>
								toggleMenu(
									!menu
								)
							}
						>
							<FontAwesomeIcon
								icon={faBars}
							/>
						</button>
					</div>
					<div className="col-auto d-none d-md-block">
						<div className="row justify-content-end text-white nav-items">
							<div className="col-auto ps-4">
								<NavLink
									to="/"
									className={({
										isActive,
									}) =>
										isActive
											? activeClassName
											: undefined
									}
								>
									Home
								</NavLink>
							</div>
							<div className="col-auto ps-4">
								<NavLink
									to="/projects"
									className={({
										isActive,
									}) =>
										isActive
											? activeClassName
											: undefined
									}
								>
									Work
								</NavLink>
							</div>
							<div className="col-auto ps-4">
								<NavLink
									to="/about"
									className={({
										isActive,
									}) =>
										isActive
											? activeClassName
											: undefined
									}
								>
									About
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<OverlayMenu toggle={toggleMenu} menu={menu} />
		</>
	);
};

export default HoNav;
