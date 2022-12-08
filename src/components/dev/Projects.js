import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../utilities/projectsDev';
import '../../css/Projects.css';

const Projects = () => {
	return (
		<div className="row mt-5">
			<div className="col-xs-12 mb-5">
				<ProjectCard
					project={projects.conservationLabs}
				/>
			</div>
			<div className="col-xs-12 mb-5">
				<ProjectCard
					project={projects.foodFromFriends}
				/>
			</div>
			<div className="col-xs-12 mb-5">
				<ProjectCard project={projects.coffeeCorner} />
			</div>
			<div className="col-xs-12 mb-5">
				<ProjectCard project={projects.ghibli} />
			</div>
		</div>
	);
};

export default Projects;
