import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import contactInfo from '../../utilities/contactInfo';

import '../../Main.css';

const VertNav = () => {
	const contactItems = contactInfo.filter((el) => el.beta);
	return (
		<>
			<Stack gap={2} className="mb-4 h2">
				<div>Saul</div>
				<div>Graves</div>
			</Stack>
			<Stack className="mb-4">
				<div>
					<Link to="/dev" className="text-dark">
						Work
					</Link>
				</div>
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
				<div>
					<Link to="/contact" className="text-dark">
						Contact
					</Link>
				</div>
			</Stack>
			<Row>
				{contactItems.map((item, ind) => (
					<Col xs={1}>
						<a
							key={ind}
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
		</>
	);
};

export default VertNav;
