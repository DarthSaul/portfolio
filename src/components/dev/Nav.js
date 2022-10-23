import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OverlayMenu from './OverlayMenu';

import contactInfo from '../../utilities/contactInfo';

const HoNav = () => {
	const [menu, toggleMenu] = useState(false);

	const contactItems = contactInfo.filter((el) => el.beta);

	return (
		<nav className="navbar bg-transparent py-3">
			<div className="container-fluid row align-items-start justify-content-between pe-0">
				<div className="col-auto">
					<div className="h1 text-weight-bold">
						<strong>Saul Graves</strong>
					</div>
					<div className="external-links">
						{contactItems.map((item, ind) => (
							<a
								key={ind}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="me-2"
							>
								<FontAwesomeIcon icon={item.icon} />
							</a>
						))}
					</div>
				</div>
				<div className="col-auto p-0">
					<button
						type="button"
						className="btn btn-transparent p-0 text-muted"
						onClick={() => toggleMenu(!menu)}
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
