import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';

import VertNav from './VertNav';

import ProjectCard from './ProjectCard';

import projects from '../../utilities/projectsDev';

import '../../Main.css';

const Projects = () => {
	return (
		<Container fluid className="my-5">
			<Row className="wrapper">
				<Col xs={2} className="columns px-5">
					<VertNav />
				</Col>
				<Col xs={7} className="columns">
					<Row className="mb-2" style={{ minHeight: ' 50% ' }}>
						<Col>
							<ProjectCard project={projects.coffeeCorner} />
						</Col>
					</Row>

					<Row className="gx-2" style={{ minHeight: ' 30% ' }}>
						<Col>
							<ProjectCard project={projects.ghibli} />
						</Col>
						<Col>
							<ProjectCard project={projects.marvel} />
						</Col>
					</Row>
				</Col>

				<Col>
					<Stack gap={2}>
						<div style={{ minHeight: ' 40% ' }}>
							<ProjectCard project={projects.foodFromFriends} />
						</div>
						<div style={{ minHeight: ' 40% ' }}>
							<ProjectCard project={projects.portfolio} />
						</div>
					</Stack>
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
