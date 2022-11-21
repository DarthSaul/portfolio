import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import contactInfo from '../../utilities/contactInfo';

import '../../css/About.css';

const About = () => {
	return (
		<div className="container-fluid">
			<div className="row justify-content-between">
				<div
					xs={12}
					lg={6}
					className="col-xs-12 col-lg-6 columns"
				>
					<div className="mt-2 mb-4 h2">Bio</div>
					<div className="vstack gap-4 h6 fw-light text-muted mb-4">
						<div>
							A few years ago, I
							decided to teach myself
							full-stack web
							development because I
							wanted to create
							immersive digital
							experiences that make an
							immediate impact on
							users no matter where
							they come from.
						</div>
						<div>
							I obsess over clean,
							scalable, and
							well-designed backend
							architecture. On the
							frontend, I build
							beautiful user
							experiences rooted in
							responsive UX/UI and
							modern web design.
						</div>
						<div>
							My JavaScript expertise
							lies in Node, Express,
							React, and Vue.
						</div>
						<div>
							While I'm not coding,
							I'm reading fantasy
							books, cooking delicious
							food (I think), and
							brewing A LOT of coffee.
						</div>
					</div>
					<div className="h4">Technologies</div>
					<div className="row mb-3 fw-light text-muted">
						<div className="col-auto me-3">
							<div className="vstack">
								<div>
									JavaScript
								</div>
								<div>
									Node,
									Express
								</div>
								<div>
									React,
									Vue
								</div>
							</div>
						</div>
						<div className="col-auto me-3">
							<div className="vstack">
								<div>
									SQL
									(PostgreSQL)
								</div>
								<div>
									NoSQL
									(MongoDB)
								</div>
								<div>
									Git,
									GitHub,
									AWS
								</div>
							</div>
						</div>
						<div className="col-auto">
							<div className="vstack">
								<div>
									HTML,
									CSS
								</div>
								<div>
									Bootstrap
								</div>
								<div>Jest</div>
							</div>
						</div>
					</div>
					<div className="h4">Skills</div>
					<div className="row mb-4 fw-light text-muted">
						<div className="col-auto me-3">
							<div className="vstack">
								<div>
									Responsive
									web
									design
								</div>
								<div>Figma</div>
							</div>
						</div>
						<div className="col-auto me-3">
							<div className="vstack">
								<div>
									REST
									APIs
								</div>
								<div>
									Agile,
									Scrum
								</div>
							</div>
						</div>
					</div>
					<div className="h4">
						Let's get in touch
					</div>
					<div className="about-page-links">
						{contactInfo.map(
							(item, ind) => (
								<a
									key={
										ind
									}
									href={
										item.link
									}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon
										icon={
											item.icon
										}
									/>
								</a>
							)
						)}
					</div>
				</div>

				<div className="col-xs-12 col-md-auto">
					<img
						src="https://res.cloudinary.com/darthsaul/image/upload/v1634576349/Portfolio/IMG_7676_1_xzxscy.jpg"
						alt="profile"
						className="bio-img ml-auto my-4"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
