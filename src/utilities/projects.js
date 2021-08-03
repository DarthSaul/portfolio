import {
    faMask,
    faHamburger,
    faFolder,
    faCoffee
} from '@fortawesome/free-solid-svg-icons';

import marvel from '../img/marvel.jpg';
import food from '../img/food.jpg';
import github from '../img/github.jpg';

const projects = [
    {
        name: 'Coffee Corner',
        description: 'Join a community of coffee lovers',
        icon: faCoffee,
        projectLink: 'https://ancient-cove-69346.herokuapp.com/',
        githubLink: 'https://github.com/DarthSaul/coffee-corner',
        imgUrl: 'https://res.cloudinary.com/darthsaul/image/upload/v1627321743/Coffee-Corner/coffee_beans_light_cmn7od.jpg'
    },
    {
        name: 'Food From Friends',
        description: 'Share lists of your food recs',
        icon: faHamburger,
        projectLink: 'https://arcane-lowlands-25770.herokuapp.com/',
        githubLink: 'https://github.com/DarthSaul/food-from-friends',
        imgUrl: food
    },
    {
        name: 'Marvel Ultimate Team',
        description: 'Build a team of super heroes',
        icon: faMask,
        projectLink: 'https://lychee-crisp-57990.herokuapp.com/',
        githubLink: 'https://github.com/DarthSaul/superhero-app',
        imgUrl: marvel
    },
    {
        name: 'Portfolio',
        description: 'This website',
        icon: faFolder,
        projectLink: '',
        githubLink: 'https://github.com/DarthSaul/portfolio',
        imgUrl: github
    }
];

export default projects;
