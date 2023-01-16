import React, { useState } from 'react';
import * as Scroll from 'react-scroll';
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import OverlayMenu from './OverlayMenu';
import '../../css/Nav.css';

const HoNav = () => {
	const [menu, toggleMenu] = useState(false);
	let activeClassName = 'active-nav-link';

	return (
		<div className="top-navbar">
			<nav className="inner-nav ">
				<div className="row justify-content-between align-items-center py-4">
					<div className="col-auto text-light d-none d-md-block">
						<h2>
							<div>
								Saul{' '}
								<span>
									Graves
								</span>
							</div>
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
								<Link
									activeClass="active-nav-link"
									to="home"
									duration={
										10
									}
									spy={
										true
									}
									smooth={
										true
									}
								>
									Home
								</Link>
							</div>
							<div className="col-auto ps-4">
								<Link
									activeClass="active-nav-link"
									to="work"
									duration={
										10
									}
									spy={
										true
									}
									smooth={
										true
									}
									offset={
										-100
									}
								>
									Work
								</Link>
							</div>
							<div className="col-auto ps-4">
								<Link
									activeClass="active-nav-link"
									to="about"
									duration={
										10
									}
									spy={
										true
									}
									smooth={
										true
									}
									offset={
										-100
									}
								>
									About
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* <OverlayMenu toggle={toggleMenu} menu={menu} /> */}
		</div>
	);
};

export default HoNav;
