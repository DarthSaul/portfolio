import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../utilities/projectsDev';
import '../../css/Projects.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
	AOS.init();
	return (
		<div
			className="container-fluid work-wrapper"
			data-aos="fade"
			data-aos-duration="750"
		>
			<div className="row mx-auto pt-3">
				<div className="col-xs-12 px-0">
					<div className="my-5 h2 text-light">
						My Work
					</div>
				</div>
				<div className="col-xs-12 mb-5">
					<ProjectCard
						project={
							projects.conservationLabs
						}
					/>
				</div>
				<div className="col-xs-12 mb-5">
					<ProjectCard
						project={
							projects.foodFromFriends
						}
					/>
				</div>
				<div className="col-xs-12 mb-5">
					<ProjectCard
						project={projects.coffeeCorner}
					/>
				</div>
				<div className="col-xs-12 mb-5">
					<ProjectCard
						project={projects.ghibli}
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
