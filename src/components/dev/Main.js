import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

import contactInfo from '../../utilities/contactInfo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../../Main.css';

const Main = () => {
	const tl = gsap.timeline({
		defaults: {
			duration: 1.5,
		},
	});

	tl.from('.container', {
		y: -125,
		opacity: 0,
	});

	return (
		<Container>
			<Row className="wrapper">
				<Col xs={2}>1 of 4</Col>
				<Col>2 of 4</Col>
				<Col>3 of 4</Col>
				<Col>4 of 4</Col>
			</Row>
			{/* <Row>
				<Col>
					<Card
						bg="dark"
						key="dark"
						text="white"
						style={{ width: '18rem' }}
						className="mb-2"
					>
						<Card.Header>Header</Card.Header>
						<Card.Body>
							<Card.Title>Dark Card Title </Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row> */}
		</Container>
	);
};

export default Main;
