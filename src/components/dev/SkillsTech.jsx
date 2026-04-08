const skills = [
	{
		heading: 'Languages',
		items: 'TypeScript / JavaScript, Python, SQL',
	},
	{
		heading: 'Frontend',
		items: 'Vue / Nuxt, React / Next.js, Tailwind CSS, Responsive & accessible UI, Design systems & component libraries',
	},
	{
		heading: 'Backend',
		items: 'Node.js / Express, FastAPI, REST API design, PostgreSQL, MongoDB',
	},
	{
		heading: 'AI & LLM Integration',
		items: 'LLM API integration (Anthropic, OpenAI), Retrieval-augmented generation (RAG), Prompt design & evaluation, AI-powered product features',
	},
	{
		heading: 'Cloud & Infrastructure',
		items: 'AWS, Git / GitHub, CI/CD, Docker',
	},
	{
		heading: 'Testing & Quality',
		items: 'Vitest, Jest, Code review, Production system design',
	},
	{
		heading: 'Ways of Working',
		items: 'Agile / Scrum, Figma, Cross-functional collaboration, Technical mentorship',
	},
];

const SkillsTech = () => {
	return (
		<div className="skills-grid">
			{skills.map(({ heading, items }) => (
				<div key={heading} className="skills-row">
					<span className="skills-heading">{heading}</span>
					<span className="skills-items">{items}</span>
				</div>
			))}
		</div>
	);
};

export default SkillsTech;
