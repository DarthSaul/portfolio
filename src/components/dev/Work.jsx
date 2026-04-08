import ProjectCard from './ProjectCard';
import projects from '../../utilities/projectsDev';
import '../../css/Projects.css';

const workItems = [
	projects.cityNationalBank,
	projects.conservationLabs,
];

const projectItems = [
	projects.fitnessTracker,
	projects.foodFromFriends,
	projects.coffeeCorner,
	projects.ghibli,
];

const Work = () => {
	return (
		<div className="work-wrapper">
			<div className="work-heading">
				<h2>Work</h2>
			</div>
			<div className="work-list">
				{workItems.map((item) => (
					<ProjectCard key={item.id} project={item} />
				))}
			</div>

			<div className="work-heading work-heading-projects">
				<h2>Projects</h2>
			</div>
			<div className="work-list">
				{projectItems.map((item) => (
					<ProjectCard key={item.id} project={item} />
				))}
			</div>
		</div>
	);
};

export default Work;
