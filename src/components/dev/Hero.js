import React from 'react';
import { NavLink } from 'react-router-dom';
import contactInfo from '../../utilities/contactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../css/Hero.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
	AOS.init();

	const contactItems = contactInfo.filter((el) => el.beta);

	return (
		<div
			className="d-flex align-items-center hero-wrapper pb-4"
			data-aos="fade"
			data-aos-duration="500"
		>
			<div className="row justify-content-between align-items-stretch gy-5 text-white">
				<div className="col-xs-12 col-md-7">
					<div className="row">
						<div className="col-xs-12 display-1 ps-2 mb-2">
							Hi, I'm Saul
						</div>
						<div className="col-xs-12 mb-5 hero-headline">
							A{' '}
							<span className="fs-4 px-1 text-white">
								Front-End
								Developer
							</span>{' '}
							building awesome user
							experiences for the web.
						</div>

						<div className="col-xs-12 mb-4">
							<div className="about-link">
								<NavLink to="/about">
									About Me
								</NavLink>
							</div>
						</div>
						<div className="col-xs-12 external-links">
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
										className="me-3"
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
				</div>
				<div className="col-xs-12 col-md-auto">
					<div className="row justify-content-center align-items-center h-100">
						<div className="col">
							<img
								src="https://res.cloudinary.com/darthsaul/image/upload/v1634576349/Portfolio/IMG_7676_1_xzxscy.jpg"
								alt="profile"
								className="hero-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
