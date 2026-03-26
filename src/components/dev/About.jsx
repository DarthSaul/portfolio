import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactInfo from '../../utilities/contactInfo';
import '../../css/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	useEffect(() => { AOS.init(); }, []);
	const contactItems = contactInfo.filter((el) => el.beta);

	return (
		<div className="about-wrapper" data-aos="fade" data-aos-duration="750">
			<div className="about-contact-heading">Let's get in touch</div>
			<div className="about-page-links">
				{contactItems.map((item, ind) => (
					<a key={ind} href={item.link} target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={item.icon} />
					</a>
				))}
			</div>
		</div>
	);
};

export default About;
