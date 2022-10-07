import Card from 'react-bootstrap/Card';

import '../../Main.css';

function ProjectCard({ project }) {
	const { name, desc, headline, icon, projectLink, githubLink, imgUrl } =
		project;
	const divStyle = {
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.65)), url(${imgUrl})`,
		backgroundSize: `150%`,
		backgroundPosition: 'contain',
		backgroundRepeat: 'repeat',
		borderRadius: 0,
	};
	return (
		<Card className="text-bg-primary h-100" border="light" style={divStyle}>
			{/* <Card.Img src={imgUrl} alt="Card image" /> */}

			<Card.Body className="h-100">
				<Card.Title>{name}</Card.Title>
				<Card.Text>{headline}</Card.Text>
				<Card.Text>{desc}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default ProjectCard;
