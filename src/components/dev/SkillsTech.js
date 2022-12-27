import React from 'react';

const SkillsTech = () => {
	return (
		<div className="row text-white">
			<div className="col-xs-12 col-md-6">
				<div className="h4">Technologies</div>
				<div className="row mb-3 fw-light">
					<div className="col-auto me-3">
						<div className="vstack">
							<div>JavaScript</div>
							<div>Node, Express</div>
							<div>React, Vue</div>
						</div>
					</div>
					<div className="col-auto me-3">
						<div className="vstack">
							<div>
								SQL (PostgreSQL)
							</div>
							<div>
								NoSQL (MongoDB)
							</div>
							<div>
								Git, GitHub, AWS
							</div>
						</div>
					</div>
					<div className="col-auto">
						<div className="vstack">
							<div>HTML, CSS</div>
							<div>Bootstrap</div>
							<div>Jest</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-xs-12 col-md-6">
				<div className="h4">Skills</div>
				<div className="row mb-4 fw-light">
					<div className="col-auto me-3">
						<div className="vstack">
							<div>
								Responsive web
								design
							</div>
							<div>Figma</div>
						</div>
					</div>
					<div className="col-auto me-3">
						<div className="vstack">
							<div>REST APIs</div>
							<div>Agile, Scrum</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsTech;
