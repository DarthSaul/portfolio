import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import contactInfo from '../../utilities/contactInfo';

const VertNav = () => {
	const contactItems = contactInfo.filter((el) => el.beta);

	return (
		<div className="position-fixed">
			<Stack className="mb-4 nav-links">
				<div className="mb-4 title">
					<Link to="/" className="text-dark fw-bold">
						<div>Saul</div>
						<div>Graves</div>
					</Link>
				</div>
				<div>
					<Link to="/" className="text-dark">
						Projects
					</Link>
				</div>
				<div>
					<Link to="/about" className="text-dark">
						About
					</Link>
				</div>
			</Stack>
			<Row className="external-links">
				{contactItems.map((item, ind) => (
					<Col xs={1} key={ind}>
						<a
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={item.icon} />
						</a>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default VertNav;
