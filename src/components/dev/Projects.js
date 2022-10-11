import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectCard from './ProjectCard';

import projects from '../../utilities/projectsDev';

import '../../css/Projects.css';

const Projects = () => {
	return (
		<Container fluid>
			<Row className="wrapper">
				<Col xs={12} lg={7} className="columns p-0">
					<Row className="mb-2" style={{ minHeight: ' 48% ' }}>
						<Col>
							<ProjectCard project={projects.conservationLabs} />
						</Col>
					</Row>

					<Row className="gx-2" style={{ minHeight: ' 33% ' }}>
						<Col sm={7}>
							<ProjectCard project={projects.ghibli} />
						</Col>
						<Col className="mb-5">
							<ProjectCard project={projects.portfolio} />
						</Col>
					</Row>
				</Col>

				<Col className="columns px-2">
					<Row className="mb-2" style={{ minHeight: ' 33% ' }}>
						<Col>
							<ProjectCard project={projects.foodFromFriends} />
						</Col>
					</Row>
					<Row className="mb-2" style={{ minHeight: ' 54% ' }}>
						<Col>
							<ProjectCard project={projects.coffeeCorner} />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
