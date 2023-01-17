import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../../css/Nav.css';

const HoNav = () => {
	const [navBg, setNavBg] = useState(false);
	const changeNavBg = () => {
		if (window.scrollY >= 50) {
			setNavBg(true);
		} else {
			setNavBg(false);
		}
	};
	window.addEventListener('scroll', changeNavBg);

	return (
		<div className={navBg ? 'top-navbar nav-bg' : 'top-navbar'}>
			<nav className="inner-nav">
				<div className="row justify-content-between align-items-center">
					<div className="col-auto text-light d-none d-md-block">
						<h2 className="pt-2">
							<Link
								to="home"
								offset={-100}
							>
								Saul{' '}
								<span>
									Graves
								</span>
							</Link>
						</h2>
					</div>
					<div className="col-auto text-light d-md-none ">
						<h2 className="pt-2">
							<Link
								to="home"
								offset={-100}
							>
								S<span>G</span>
							</Link>
						</h2>
					</div>

					<div className="col-auto">
						<div className="row justify-content-end text-white nav-items">
							<div className="col-auto ps-4">
								<Link
									activeClass="active-nav-link"
									to="home"
									duration={
										10
									}
									offset={
										-100
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
										0
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
										0
									}
								>
									About
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default HoNav;
