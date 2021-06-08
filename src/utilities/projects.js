import { faMask, faHamburger } from '@fortawesome/free-solid-svg-icons';

import marvel from '../img/marvel.jpg';
import food from '../img/food.jpg';

const projects = [
    {
        name: 'Marvel Ultimate Team',
        description: 'Build a team of Marvel super heroes!',
        icon: faMask,
        projectLink: 'https://lychee-crisp-57990.herokuapp.com/',
        githubLink: 'https://github.com/DarthSaul/superhero-app',
        imgUrl: marvel
    },
    {
        name: 'Food From Friends',
        description: 'Share lists of your food recs!',
        icon: faHamburger,
        projectLink: 'https://arcane-lowlands-25770.herokuapp.com/',
        githubLink: 'https://github.com/DarthSaul/food-from-friends',
        imgUrl: food
    }
];

export default projects;
