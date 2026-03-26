import SkillsTech from '../components/dev/SkillsTech';
import '../css/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
	AOS.init();

	return (
		<div className="content-container">
			<div className="about-page-wrapper" data-aos="fade" data-aos-duration="500">
				<h2 className="about-section-heading">Bio</h2>
				<div className="about-bio-text">
					<div>
						Hello! I'm Saul, a software developer currently based in New York City.
					</div>
					<div>
						While I'm trained in the arts of full-stack, I currently specialize in
						front-end development, design systems, TDD, and building scalable web
						applications rooted in seamless user experiences.
					</div>
					<div>
						I currently work at City National Bank, where I lead the frontend
						development of our Roxbury Design System, a Vue.js component library
						and UX/UI kit consumed across various facets of the bank. We're focused
						on TDD, building at scale and optimizing our library's performance.
					</div>
					<div>
						I learned web development because I wanted to design, build, and create
						things that can be shared across the world. Jumping into code has been
						the best decision of my life, and I recently started writing about my
						experiences on{' '}
						<a href="https://medium.com/@saulgraves" target="_blank" rel="noreferrer">
							Medium
						</a>
						.
					</div>
					<div>
						While I'm not coding, I try to spend time away from the keyboard. I'm
						on a big fantasy and sci-fi novel binge, which currently has me reading
						Brandon Sanderson's <i>The Way Of Kings</i>. I love to cook, although
						the food may have mixed results. My coffee, however, is perfection.
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
