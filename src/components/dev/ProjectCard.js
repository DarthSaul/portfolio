import Card from 'react-bootstrap/Card';

import '../../Main.css';

function ProjectCard() {
	return (
		<Card
			className="bg-dark text-white"
			border="light"
			style={{ borderRadius: 0 }}
		>
			<Card.Img
				src="https://res.cloudinary.com/darthsaul/image/upload/v1627321743/Coffee-Corner/coffee_beans_light_cmn7od.jpg"
				alt="Card image"
			/>

			<Card.ImgOverlay className="project-card-img p-0">
				<Card.Body className="h-100">
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
				</Card.Body>
			</Card.ImgOverlay>
		</Card>
	);
}

export default ProjectCard;
