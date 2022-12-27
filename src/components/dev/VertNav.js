import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import contactInfo from '../../utilities/contactInfo';

const VertNav = () => {
	const contactItems = contactInfo.filter((el) => el.beta);

	return (
		<div className="position-fixed">
			<div className="vstack my-3 nav-links">
				<div>
					<Link to="/" className="text-dark">
						Home
					</Link>
				</div>
				<div>
					<Link to="/about" className="text-dark">
						About
					</Link>
				</div>
			</div>
			<div className="row external-links">
				{contactItems.map((item, ind) => (
					<div className="col-1" key={ind}>
						<a
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon
								icon={item.icon}
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default VertNav;
