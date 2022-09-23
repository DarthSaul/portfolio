import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import VertNav from './VertNav';

import '../../Main.css';

const Contact = () => {
	return (
		<Container fluid className="pt-5">
			<Row className="wrapper">
				<Col xs={2} className="columns px-5">
					<VertNav />
				</Col>
				<Col className="columns green display-3">CONTACT</Col>
			</Row>
		</Container>
	);
};

export default Contact;