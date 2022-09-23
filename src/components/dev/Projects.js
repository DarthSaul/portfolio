import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import VertNav from './VertNav';

import ProjectCard from './ProjectCard';

import projects from '../../utilities/projects';

import '../../Main.css';

const Projects = () => {
	const projectsOne = projects.slice(0, 2);
	const projectsTwo = projects.slice(2);
	return (
		<Container fluid className="pt-5">
			<Row className="wrapper">
				<Col xs={2} className="columns px-5">
					<VertNav />
				</Col>
				<Col className="columns">
					<Row xs={1} className="g-4">
						{projectsOne.map((item, ind) => (
							<Col key={ind}>
								<ProjectCard />
							</Col>
						))}
					</Row>
				</Col>
				<Col className="columns">
					<Row xs={1} className="g-4">
						{projectsTwo.map((item, ind) => (
							<Col key={ind}>
								<ProjectCard />
							</Col>
						))}
					</Row>
				</Col>
				<Col className="columns text-center">4 of 4</Col>
			</Row>
		</Container>
	);
};

export default Projects;
