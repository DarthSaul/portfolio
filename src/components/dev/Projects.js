import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../utilities/projectsDev';
import '../../css/Projects.css';

const Projects = () => {
	return (
		<div className="container-fluid projects-wrapper">
			<div className="row g-4">
				<div className="col-xs-12 col-lg-7">
					<div className="row mb-4">
						<div className="col project-container">
							<ProjectCard project={projects.conservationLabs} />
						</div>
					</div>

					<div className="row g-4">
						<div className="col-xs-12 col-md-7 project-container projects-2">
							<ProjectCard project={projects.ghibli} />
						</div>
						<div className="col-xs-12 col-md mb-2 project-container projects-3">
							<ProjectCard project={projects.marvel} />
						</div>
					</div>
				</div>

				<div className="col">
					<div className="row mb-4">
						<div className="col project-container projects-food projects-4">
							<ProjectCard project={projects.foodFromFriends} />
						</div>
					</div>
					<div className="row">
						<div className="col project-container projects-coffee projects-5">
							<ProjectCard project={projects.coffeeCorner} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
