function ProjectCard({ project }) {
	const { name, imgUrl, headline, desc, projectLink, githubLink } =
		project;
	const headlineText = 'font-weight: .1em';

	return (
		<div className="row g-4">
			<div className="col-md-6">
				<img
					src={imgUrl}
					className="img-fluid rounded shadow-lg"
					alt="screenshot"
				/>
			</div>
			<div className="col-md-6 bg-transparent text-light">
				<div className="mb-4">
					<h3>{name}</h3>
					<p className={{ headlineText }}>
						{headline}
					</p>
					<p>
						<small>{desc}</small>
					</p>
				</div>
				{projectLink.length ? (
					<div>
						<a
							href={projectLink}
							target="_blank"
							rel="noreferrer"
							className="btn btn-light me-3"
						>
							Website
						</a>
						<a
							href={githubLink}
							target="_blank"
							rel="noreferrer"
							className="btn btn-light"
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
