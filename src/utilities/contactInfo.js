import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

import resume from '../Saul_Graves-Resume.pdf';

const contactItems = [
    {
        name: 'GitHub',
        link: 'https://github.com/DarthSaul',
        icon: faGithub
    },
    {
        name: 'Email',
        link: 'mailto:graves.saul@gmail.com',
        icon: faEnvelope
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/saulgraves/',
        icon: faLinkedin
    },
    {
        name: 'Resume',
        link: resume,
        icon: faFileAlt
    }
];

export default contactItems;
