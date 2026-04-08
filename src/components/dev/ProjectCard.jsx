import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectCard({ project }) {
	const { name, headline, icon, projectLink, githubLink, period } = project;

	return (
		<div className="project-row">
			<div className="project-row-left">
				{icon && (
					<span className="project-icon">
						<FontAwesomeIcon icon={icon} />
					</span>
				)}
				<div className="project-info">
					<span className="project-name">{name}</span>
					<span className="project-headline">{headline}</span>
				</div>
			</div>
			<div className="project-row-right">
				{period && (
					<span className="project-period">{period}</span>
				)}
				{projectLink && (
					<a href={projectLink} target="_blank" rel="noreferrer" className="project-link" aria-label="Live site">
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</a>
				)}
				{githubLink && (
					<a href={githubLink} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				)}
			</div>
		</div>
	);
}

export default ProjectCard;
