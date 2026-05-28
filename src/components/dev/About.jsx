import contactInfo from '../../utilities/contactInfo';
import '../../css/About.css';

const About = () => {
	return (
		<div className="about-wrapper">
			<h2 className="about-contact-heading">Let's get in touch</h2>
			<div className="about-page-links">
				{contactInfo.map((item, ind) => (
					<a key={ind} href={item.link} target="_blank" rel="noopener noreferrer">
						{item.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default About;
