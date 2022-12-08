import React from 'react';
import '../../css/Hero.css';
import contactInfo from '../../utilities/contactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
	const contactItems = contactInfo.filter((el) => el.beta);

	return (
		<div className="d-flex align-items-center h-100 hero-wrapper">
			<div className="row justify-content-between align-items-stretch text-white">
				<div className="col-xs-12 col-md-7">
					<div className="row">
						<div className="col-xs-12 display-1 ps-2">
							Hi, I'm Saul.
						</div>
						<div className="col-xs-12 mb-4">
							Full-stack Engineer
						</div>
						<div className="col-xs-12 mb-4">
							Lorem ipsum dolor sit
							amet consectetur,
							adipisicing elit.
							Expedita explicabo neque
							quas earum dignissimos
							ab recusandae quae
							consequatur fuga,
						</div>
						<div className="col-xs-12 mb-4">
							About Me
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
