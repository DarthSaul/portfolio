import React from 'react';

const SkillsTech = () => {
	return (
		<div className="row gy-3 text-white">
			<div className="col-xs-12 col-md-6 me-5">
				<div className="h4">Technologies</div>
				<div className="row g-3 mb-3 fw-light">
					<div className="col-auto me-3">
						<div className="vstack">
							<div>
								JavaScript /
								TypeScript
							</div>
							<div>Node, Express</div>
							<div>
								Git, GitHub, AWS
							</div>
						</div>
					</div>
					<div className="col-auto me-3">
						<div className="vstack">
							<div>
								Vue.js, React.js
							</div>
							<div>
								SQL (PostgreSQL)
							</div>
							<div>
								NoSQL (MongoDB)
							</div>
						</div>
					</div>
					<div className="col-auto">
						<div className="vstack">
							<div>HTML & CSS</div>
							<div>Bootstrap</div>
							<div>Jest, Vitest</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-xs-12 col-md">
				<div className="h4">Skills</div>
				<div className="row mb-4 fw-light">
					<div className="col-auto me-3">
						<div className="vstack">
							<div>
								Design systems
							</div>
							<div>
								Component
								libraries
							</div>
							<div>
								Responsive web
								design
							</div>
						</div>
					</div>
					<div className="col-auto me-3">
						<div className="vstack">
							<div>REST APIs</div>
							<div>Agile, Scrum</div>
							<div>Figma</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsTech;
