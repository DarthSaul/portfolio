function ProjectCard({ project }) {
	const { name, imgUrl, headline, desc, projectLink, githubLink } =
		project;

	return (
		<div className="row align-items-end project-row">
			<div className="col-md-6 mb-4 mb-md-0">
				<img
					src={imgUrl}
					className="img-fluid rounded shadow-lg"
					alt="screenshot"
				/>
			</div>
			<div className="col-md-6 text-light pb-0">
				<div className="mb-4">
					<h1>{name}</h1>
					<p>{headline}</p>
				</div>
				<div>
					<span className="fs-5">
						<small>{desc}</small>
					</span>
				</div>
				{projectLink.length ? (
					<div className="mt-4 mb-2">
						<a
							href={projectLink}
							target="_blank"
							rel="noreferrer"
							className="project-btn me-3"
						>
							Website
						</a>
						<a
							href={githubLink}
							target="_blank"
							rel="noreferrer"
							className="project-btn"
						>
							GitHub
						</a>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default ProjectCard;
