import React, { componentDidMount } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import contactInfo from '../../utilities/contactInfo';

import '../../Main.css';

const Main = () => {
	contactInfo.pop();
	return (
		<Container fluid className="pt-5">
			<Row className="wrapper">
				<Col xs={2} className="columns px-5">
					<Stack gap={2} className="mb-5 h2">
						<div>Saul</div>
						<div>Graves</div>
					</Stack>
					<Stack className="mb-3">
						<div>Work</div>
						<div>About</div>
						<div>Contact</div>
					</Stack>
					<Row>
						{contactInfo.map((item, ind) => (
							<Col>
								{' '}
								<a
									key={ind}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="about-link"
								>
									<FontAwesomeIcon icon={item.icon} />
								</a>
							</Col>
						))}
					</Row>
				</Col>
				<Col className="columns blue">2 of 4</Col>
				<Col className="columns green">3 of 4</Col>
				<Col className="columns">4 of 4</Col>
			</Row>
		</Container>
	);
};

export default Main;
