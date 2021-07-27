import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import gmail from '../img/gmail.jpg';
import linkedIn from '../img/linkedIn.jpg';
import github from '../img/github.jpg';

const contactItems = [
    {
        name: 'GitHub',
        link: 'https://github.com/DarthSaul',
        icon: faGithub,
        backgroundImg: github
    },
    {
        name: 'Email',
        link: 'mailto:graves.saul@gmail.com',
        icon: faEnvelope,
        backgroundImg: gmail
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/saulgraves/',
        icon: faLinkedin,
        backgroundImg: linkedIn
    }
];

export default contactItems;
