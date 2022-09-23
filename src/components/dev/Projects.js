import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import VertNav from './VertNav';

import '../../Main.css';

const Projects = () => {
	return (
		<Container fluid className="pt-5">
			<Row className="wrapper">
				<Col xs={2} className="columns px-5">
					<VertNav />
				</Col>
				<Col className="columns red">2 of 4</Col>
				<Col className="columns">3 of 4</Col>
				<Col className="columns blue">4 of 4</Col>
			</Row>
		</Container>
	);
};

export default Projects;
