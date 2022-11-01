import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
	const { name, imgUrl, id } = project;
	const divStyle = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), url(${imgUrl})`,
		backgroundSize: `cover`,
		borderRadius: 0,
	};
	return (
		<Link className="text-white project-link" to={`/project/${id}`}>
			<Card className="h-100" border="light" style={divStyle}>
				<Card.Body className="project-card-body m-0 p-0">
					<div
						onClick={(e) => e.preventDefault()}
						className="card-title-overlay"
					>
						{name}
					</div>
				</Card.Body>
			</Card>
		</Link>
	);
}

export default ProjectCard;
