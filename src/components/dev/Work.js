import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../css/Work.css';

const Main = () => {
	return (
		<Container fluid>
			<Row className="wrapper">
				<Col xs={8} className="blue">
					2 of 3
				</Col>
				<Col className="green">3 of 3</Col>
			</Row>
		</Container>
	);
};

export default Main;
