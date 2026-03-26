import React from 'react';

const SkillsTech = () => {
	return (
		<div className="skills-grid">
			<div className="skills-section">
				<div className="skills-heading">Technologies</div>
				<div className="skills-columns">
					<div className="skills-col">
						<div>JavaScript / TypeScript</div>
						<div>Node, Express</div>
						<div>Git, GitHub, AWS</div>
					</div>
					<div className="skills-col">
						<div>Vue.js, React.js</div>
						<div>SQL (PostgreSQL)</div>
						<div>NoSQL (MongoDB)</div>
					</div>
					<div className="skills-col">
						<div>HTML & CSS</div>
						<div>Bootstrap</div>
						<div>Jest, Vitest</div>
					</div>
				</div>
			</div>

			<div className="skills-section">
				<div className="skills-heading">Skills</div>
				<div className="skills-columns">
					<div className="skills-col">
						<div>Design systems</div>
						<div>Component libraries</div>
						<div>Responsive web design</div>
					</div>
					<div className="skills-col">
						<div>REST APIs</div>
						<div>Agile, Scrum</div>
						<div>Figma</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsTech;
