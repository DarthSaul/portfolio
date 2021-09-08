import {
    faMask,
    faHamburger,
    faFolder,
    faCoffee,
    faDragon
} from '@fortawesome/free-solid-svg-icons';

import marvel from '../img/marvel.jpg';
import food from '../img/food.jpg';
import github from '../img/github.jpg';
import ghibli from '../img/ghibli.jpeg';

const projects = [
    {
        name: 'Coffee Corner',
        headline: 'Join a community of coffee lovers',
        icon: faCoffee,
        projectLink: 'https://ancient-cove-69346.herokuapp.com/',
        githubLink: 'https://github.com/DarthSaul/coffee-corner',
        imgUrl: 'https://res.cloudinary.com/darthsaul/image/upload/v1627321743/Coffee-Corner/coffee_beans_light_cmn7od.jpg',
        desc: `Website for coffee enthusiasts seeking to share their experiences and learn.`,
        bullets: [
            'RESTful API backend built with Express / Node.js.',
            'Frontend interface through React.js, responsive design with Bootstrap.',
            'Mongo Atlas database, Cloudinary image upload, JWT authentication.',
            'Full CRUD: Create & edit profiles, coffees, brew methods, and more.'
        ]
    },
    {
        name: 'Food From Friends',
        headline: 'Share lists of your food recs',
        icon: faHamburger,
        projectLink: 'https://arcane-lowlands-25770.herokuapp.com/',
        githubLink: 'https://github.com/DarthSaul/food-from-friends',
        imgUrl: food,
        desc: `Social networking web app designed for sharing 'lists' of your food recommendations in a city. Built with React.`,
        bullets: [
            'Express-based backend server with validation. Full CRUD access to database.',
            'Frontend state management through React Context API.',
            'Styled with Bootstrap.'
        ]
    },
    {
        name: 'Ghibli Wallpapers',
        headline: 'A Studio Ghibli wallpaper library ',
        icon: faDragon,
        projectLink: 'https://calm-mountain-15835.herokuapp.com/home',
        githubLink: 'https://github.com/DarthSaul/ghibli-wallpapers',
        imgUrl: ghibli,
        desc: '',
        bullets: [
            'Express app, RESTful web API.',
            'Styled with custom CSS, no Bootstrap. Responsive functionality and image download built with JavaScript.',
            'Connected to Mongo Atlas via Mongoose.js'
        ]
    },
    {
        name: 'Marvel Ultimate Team',
        headline: 'Build a team of super heroes',
        icon: faMask,
        projectLink: 'https://lychee-crisp-57990.herokuapp.com/',
        githubLink: 'https://github.com/DarthSaul/superhero-app',
        imgUrl: marvel,
        desc: `First large-scale project. Marvel API wrapper gives users ability to search Marvel database for comics and super heroes.`,
        bullets: [
            'Uses EJS for HTML dynamic templating.',
            'Location data managed with Mapbox SDK.',
            'Passport.js authentication.'
        ]
    },
    {
        name: 'Portfolio',
        headline: 'This website!',
        icon: faFolder,
        projectLink: '',
        githubLink: 'https://github.com/DarthSaul/portfolio',
        imgUrl: github,
        desc: 'This website! No prior template, and lots of inspiration from a wonderful place: the internet.',
        bullets: [
            'React.js single-page application.',
            'Designed primarily with custom CSS. Mobile-first responsive approach.',
            'Animations implemented with JavaScript.'
        ]
    }
];

export default projects;
