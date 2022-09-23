import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

import contactInfo from '../../utilities/contactInfo';

const Main = () => {
	const tl = gsap.timeline({
		defaults: {
			duration: 1.5,
		},
	});

	tl.from('.container', {
		y: -125,
		opacity: 0,
	});

	return (
		<div>
			<h1>Hello, world</h1>
		</div>
	);
};

export default Main;
