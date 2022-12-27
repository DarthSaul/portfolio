import {
	faLinkedin,
	faGithub,
	faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

import resume from '../Saul_Graves-Resume.pdf';

const contactItems = [
	{
		name: 'GitHub',
		link: 'https://github.com/DarthSaul',
		icon: faGithub,
		beta: true,
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/saulgraves/',
		icon: faLinkedin,
		beta: true,
	},
	{
		name: 'Medium',
		link: 'https://medium.com/@saulgraves',
		icon: faMedium,
		beta: true,
	},
	{
		name: 'Email',
		link: 'mailto:graves.saul@gmail.com',
		icon: faEnvelope,
		beta: true,
	},
	{
		name: 'Resume',
		link: resume,
		icon: faFileAlt,
		beta: false,
	},
];

export default contactItems;
