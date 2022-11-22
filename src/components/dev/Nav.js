import React, { useState } from 'react';
import OverlayMenu from './OverlayMenu';
import '../../css/Nav.css';

const HoNav = () => {
	const [menu, toggleMenu] = useState(false);

	return (
		<nav className="top-navbar">
			<div className="row justify-content-end py-3 text-white">
				<div className="d-none d-md-block col-auto ps-5">
					Home
				</div>
				<div className="d-none d-md-block col-auto ps-5">
					Work
				</div>
				<div className="d-none d-md-block col-auto ps-5">
					About
				</div>
				<div className="d-md-none col-auto pe-4">
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
