import { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../utilities/projectsDev';
import '../../css/Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const orderedProjects = [
	projects.cityNationalBank,
	projects.conservationLabs,
	projects.foodFromFriends,
	projects.coffeeCorner,
	projects.ghibli,
];

const Projects = () => {
	useEffect(() => { AOS.init(); }, []);
	return (
		<div className="work-wrapper" data-aos="fade" data-aos-duration="750">
			<div className="work-heading">
				<h2 id="my-work">Work & Projects</h2>
			</div>
			<div className="work-list">
				{orderedProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
