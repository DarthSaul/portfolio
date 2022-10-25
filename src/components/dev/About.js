import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import contactInfo from '../../utilities/contactInfo';

import '../../css/About.css';

const About = () => {
	return (
		<Container fluid>
			<Row className="justify-content-between">
				<Col xs={12} lg={6} className="columns">
					<div className="mb-4 h2">Bio</div>
					<Stack gap={4} className="mb-4 h6 fw-light text-muted mb-5">
						<div>
							A few years ago, I decided to teach myself
							full-stack web development because I wanted to
							create immersive digital experiences that make an
							immediate impact on users no matter where they come
							from.
						</div>
						<div>
							I obsess over clean, scalable, and well-designed
							backend architecture. On the frontend, I build
							beautiful user experiences rooted in responsive
							UX/UI and modern web design.
						</div>
						<div>
							My JavaScript expertise lies in Node, Express,
							React, and Vue.
						</div>
						<div>
							While I'm not coding, I'm reading fantasy books,
							cooking delicious food (I think), and brewing A LOT
							of coffee.
						</div>
					</Stack>
					<div className="h4">Technologies and skills</div>
					<Row className="mb-5">
						<Col>
							<Stack>
								<div>1</div>
								<div>2</div>
								<div>3</div>
							</Stack>
						</Col>
						<Col>
							<Stack>
								<div>4</div>
								<div>5</div>
								<div>6</div>
							</Stack>
						</Col>
						<Col>
							<Stack>
								<div>7</div>
								<div>8</div>
								<div>9</div>
							</Stack>
						</Col>
					</Row>
					<div className="h4">Let's get in touch</div>
					<div className="about-page-links">
						{contactInfo.map((item, ind) => (
							<a
								key={ind}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={item.icon} />
							</a>
						))}
					</div>
				</Col>

				<Col xs={12} md="auto">
					<img
						src="https://res.cloudinary.com/darthsaul/image/upload/v1634576349/Portfolio/IMG_7676_1_xzxscy.jpg"
						alt="profile"
						className="bio-img ml-auto my-4"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
