import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
	const { name, imgUrl, id } = project;
	const divStyle = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), url(${imgUrl})`,
		backgroundSize: `150%`,
		backgroundPosition: 'contain',
		backgroundRepeat: 'repeat',
		borderRadius: 0,
	};
	return (
		<Card className="h-100" border="light" style={divStyle}>
			<Card.Body className="project-card-body m-0 p-0">
				<Link className="text-white project-link" to={`/project/${id}`}>
					<div className="card-title-overlay">{name}</div>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default ProjectCard;
