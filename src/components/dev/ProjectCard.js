function ProjectCard({ project }) {
	const { name, imgUrl, headline, desc } = project;
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
				<div>
					<h3>{name}</h3>
					<p className={{ headlineText }}>
						{headline}
					</p>
					<p>
						<small>{desc}</small>
					</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
