import SkillsTech from '../components/dev/SkillsTech';
import '../css/About.css';

const AboutPage = () => {
	return (
		<div className="content-container">
			<div className="about-page-wrapper">
				<div className="about-bio-text">
					<div>
						Hello! I'm Saul, a senior software engineer currently based in the big
						apple.
					</div>
					<div>
						I specialize in versatility; I love building sprawling yet scalable
						backends, performant frontends rooted in seamless UX, and above all, I
						love people.
					</div>
					<div>
						I currently work at City National Bank, where I lead the frontend
						development of our Roxbury Design System, a robust UX/UI kit consumed
						across all lines of business. We're focused on TDD, building at scale
						and optimizing our library's performance. I also contribute to CI/CD
						pipeline improvements, and I have a passion for mentoring and growing
						engineering teams.
					</div>
					<div>
						Outside of work, I'm crafting fullstack apps designed to solve real
						problems in my own life, and I obssess over the full end-to-end software
						development lifecycle.
					</div>

					<img
						src="https://res.cloudinary.com/darthsaul/image/upload/c_scale,w_600/v1670552605/Portfolio/IMG_7715_resized_nmp7vf.jpg"
						alt="Saul Graves"
						className="bio-img"
					/>

					<div>
						While I'm not building, you can typically find me reading Brandon
						Sanderson, talking too much about my favorite movies, or waiting for the
						Knicks to once again break my heart. I love to cook, although the food
						may have mixed results. My coffee, however, is perfection.
					</div>
				</div>

				<div className="about-skills">
					<SkillsTech />
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
