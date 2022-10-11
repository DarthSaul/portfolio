import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import contactInfo from '../../utilities/contactInfo';

import '../../css/VerticalNav.css';

const VertNav = () => {
	const contactItems = contactInfo.filter((el) => el.beta);
	return (
		<Col xs={1} className="vertical-nav">
			<div className="mb-4 title">
				<div>Saul</div>
				<div>Graves</div>
			</div>
			<Stack className="mb-4 nav-links">
				<div>
					<Link to="/projects" className="text-dark">
						Projects
					</Link>
				</div>

				<div>
					<Link to="/about" className="text-dark">
						About
					</Link>
				</div>
			</Stack>
			<Row>
				{contactItems.map((item, ind) => (
					<Col xs={1} key={ind}>
						<a
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-dark"
						>
							<FontAwesomeIcon icon={item.icon} />
						</a>
					</Col>
				))}
			</Row>
		</Col>
	);
};

export default VertNav;
