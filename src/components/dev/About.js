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
					<Stack
						gap={4}
						className="mb-4 h6 font-weight-normal text-muted mb-5"
					>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor
						</div>
						<div>
							Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo
						</div>
						<div>Lorem ipsum dolor sit amet,</div>
						<div>
							ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur.
						</div>
						<div>
							commodo consequat. Duis aute irure dolor in
							reprehenderit in!
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
