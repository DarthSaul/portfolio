import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../utilities/projectsDev';
import '../../css/Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
	AOS.init();
	return (
		<div className="work-wrapper" data-aos="fade" data-aos-duration="750">
			<div className="work-heading">
				<h2 id="my-work">My Work</h2>
			</div>
			<div className="work-list">
				<div className="work-item">
					<ProjectCard project={projects.cityNationalBank} />
				</div>
				<div className="work-item">
					<ProjectCard project={projects.conservationLabs} />
				</div>
				<div className="work-item">
					<ProjectCard project={projects.foodFromFriends} />
				</div>
				<div className="work-item">
					<ProjectCard project={projects.coffeeCorner} />
				</div>
				<div className="work-item">
					<ProjectCard project={projects.ghibli} />
				</div>
			</div>
		</div>
	);
};

export default Projects;
