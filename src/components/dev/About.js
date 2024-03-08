import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillsTech from './SkillsTech';

import contactInfo from '../../utilities/contactInfo';

import '../../css/About.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	AOS.init();

	const contactItems = contactInfo.filter((el) => el.beta);

	return (
		<div
			className="container-fluid text-light about-wrapper pt-2 pb-5"
			data-aos="fade"
			data-aos-duration="750"
		>
			<div className="row justify-content-between pt-5 mt-5 pb-5">
				<div className="col-xs-12 col-lg-6 columns">
					<div className="my-4 h2">
						<h2 id="about">Bio</h2>
					</div>
					<div className="vstack gap-4 h6 fw-light mb-5 bio-text">
						<div>
							Hello! I'm Saul, a
							software developer
							currently based in New
							York City.
						</div>
						<div>
							While I'm trained in the
							arts of full-stack, I
							currently specialize in
							front-end development,
							design systems, TDD, and
							building scalable web
							applications rooted in
							seamless user
							experiences.
						</div>
						<div>
							I currently work at City
							National Bank, where I
							lead the frontend
							development of our
							Roxbury Design System, a
							Vue.js component library
							and UX/UI kit consumed
							across various facets of
							the bank. We're focused
							on TDD, building at
							scale and optimizing our
							library's performance.
						</div>
						<div>
							I learned web
							development because I
							wanted to design, build,
							and create things that
							can be shared across the
							world. Jumping into code
							has been the best
							decision of my life, and
							I recently started
							writing about my
							experiences on{' '}
							<a
								href="https://medium.com/@saulgraves"
								target="_blank"
								rel="noreferrer"
							>
								Medium
							</a>
							.
						</div>
						<div>
							While I'm not coding, I
							try to spend time away
							from the keyboard. I'm
							on a big fantasy and
							sci-fi novel binge,
							which currently has me
							reading Brandon
							Sanderson's{' '}
							<i>The Way Of Kings</i>.
							I love to cook, although
							the food may have mixed
							results. My coffee,
							however, is perfection.
						</div>
					</div>
				</div>

				<div className="col-xs-12 col-md-auto">
					<img
						src="https://res.cloudinary.com/darthsaul/image/upload/c_scale,w_600/v1670552605/Portfolio/IMG_7715_resized_nmp7vf.jpg"
						alt="profile"
						className="bio-img ml-auto my-4"
					/>
					<div className="h4">
						Let's get in touch
					</div>
					<div className="about-page-links">
						{contactItems.map(
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
				<div className="col-xs-12 mb-5">
					<SkillsTech />
				</div>
			</div>
		</div>
	);
};

export default About;
