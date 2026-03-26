function ProjectCard({ project }) {
	const { name, imgUrl, headline, desc, projectLink, githubLink } = project;

	return (
		<div className="project-row">
			<div className="project-img">
				<img src={imgUrl} alt="screenshot" />
			</div>
			<div className="project-text">
				<div className="project-meta">
					<h1>{name}</h1>
					<p>{headline}</p>
				</div>
				<div className="project-desc">
					<small>{desc}</small>
				</div>
				{projectLink.length ? (
					<div className="project-links">
						<a href={projectLink} target="_blank" rel="noreferrer" className="project-btn">
							Website
						</a>
						<a href={githubLink} target="_blank" rel="noreferrer" className="project-btn">
							GitHub
						</a>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default ProjectCard;
