import {
	faMask,
	faHamburger,
	faFolder,
	faCoffee,
	faDragon,
} from '@fortawesome/free-solid-svg-icons';

const projects = {
	cityNationalBank: {
		name: 'City National Bank',
		headline: 'Senior Platform Developer',
		currentRole: true,
		icon: faCoffee,
		projectLink: '',
		githubLink: '',
		imgUrl: 'https://res.cloudinary.com/darthsaul/image/upload/v1709935742/Portfolio/jpeak3rvapve2pnwsv3e.png',
		imgUrl2: 'https://res.cloudinary.com/darthsaul/image/upload/v1667275689/Portfolio/Screen_Shot_2022-11-01_at_12.07.55_AM_pce4g1.png',
		desc: `At CNB, I lead the frontend development side of Roxbury, a design system and UI kit consumed across various development teams at the bank.`,
		bullets: ['...', '....', '...', '...'],
		id: 1,
	},
	conservationLabs: {
		name: 'Conservation Labs',
		headline: 'Front-end developer',
		currentRole: false,
		icon: faCoffee,
		projectLink: '',
		githubLink: '',
		imgUrl: 'https://res.cloudinary.com/darthsaul/image/upload/c_scale,w_1000/v1665443587/Portfolio/Screen_Shot_2022-10-10_at_6.12.43_PM_hfwvg7.png',
		imgUrl2: 'https://res.cloudinary.com/darthsaul/image/upload/v1667275689/Portfolio/Screen_Shot_2022-11-01_at_12.07.55_AM_pce4g1.png',
		desc: `At Conservation Labs, I built and maintained our client-facing Vue.js web application, and also contributed to internal-facing digital tools for the ML team.`,
		bullets: [
			'Develop our front-end codebases with Vue.js, focused on reusability, scalability, and responsive web design.',
			'Manage end-to-end development process, from wireframing to prototyping to implementation to QA.',
			'Collaborate with team members to ensure tools are meaningful and backed by data.',
			'Working with Node, PostgreSQL, AWS, Figma, Jest, modern UI frameworks, and more.',
		],
		id: 2,
	},
	coffeeCorner: {
		name: 'Coffee Corner',
		headline: 'Join a community of coffee lovers',
		icon: faCoffee,
		projectLink: 'https://ancient-cove-69346.herokuapp.com/',
		githubLink: 'https://github.com/DarthSaul/coffee-corner',
		imgUrl: 'https://res.cloudinary.com/darthsaul/image/upload/c_scale,w_1000/v1667276369/Portfolio/Screen_Shot_2022-11-01_at_12.19.24_AM_hxsmvx.png',
		imgUrl2: 'https://res.cloudinary.com/darthsaul/image/upload/v1667276325/Portfolio/Screen_Shot_2022-11-01_at_12.18.09_AM_gf6s67.png',
		desc: `Website for coffee enthusiasts seeking to share their experiences and learn.`,
		bullets: [
			'RESTful API backend built with Express / Node.js.',
			'Frontend interface through React.js, responsive design with Bootstrap.',
			'MongoDB Atlas database, Cloudinary image upload, JWT authentication.',
			'Full CRUD: Create & edit profiles, coffees, brew methods, and more.',
		],
		id: 3,
	},
	foodFromFriends: {
		name: 'Food From Friends',
		headline: 'Share lists of your food recs',
		icon: faHamburger,
		projectLink: 'https://arcane-lowlands-25770.herokuapp.com/',
		githubLink: 'https://github.com/DarthSaul/food-from-friends',
		imgUrl: 'https://res.cloudinary.com/darthsaul/image/upload/c_scale,w_1000/v1666906753/Portfolio/Screen_Shot_2022-10-27_at_5.38.33_PM_ypgjjq.png',
		imgUrl2: 'https://res.cloudinary.com/darthsaul/image/upload/v1667275508/Portfolio/Screen_Shot_2022-10-31_at_11.46.32_PM_gxjzuh.png',
		desc: `Social networking web app designed for sharing 'lists' of your food recommendations in a city. Built with React.`,
		bullets: [
			'Express-based backend server with validation. Full CRUD access to database.',
			'Frontend state management through React Context API.',
			'Dynamic React components, React Router single-page architecture.',
			'All custom CSS styles; no Bootstrap.',
		],
		id: 4,
	},
	ghibli: {
		name: 'Ghibli Wallpapers',
		headline: 'A Studio Ghibli wallpaper library ',
		icon: faDragon,
		projectLink: 'https://calm-mountain-15835.herokuapp.com/home',
		githubLink: 'https://github.com/DarthSaul/ghibli-wallpapers',
		imgUrl: 'https://res.cloudinary.com/darthsaul/image/upload/c_scale,w_1000/v1667276165/Portfolio/Screen_Shot_2022-11-01_at_12.14.58_AM_nydib0.png',
		imgUrl2: 'https://res.cloudinary.com/darthsaul/image/upload/v1631887588/Portfolio/ghibli_ha7u7v.jpg',
		desc: 'My favorite project to date! A simple, lightweight program used to search and download Studio Ghibli desktop wallpapers.',
		bullets: [
			'Express app, RESTful web API.',
			'Styled with custom CSS, no Bootstrap. Responsive functionality and image download built with JavaScript.',
			'Connected to MongoDB Atlas via Mongoose.js.',
		],
		id: 5,
	},
	marvel: {
		name: 'Marvel Ultimate Team',
		headline: 'Build a team of super heroes',
		icon: faMask,
		projectLink: 'https://lychee-crisp-57990.herokuapp.com/',
		githubLink: 'https://github.com/DarthSaul/superhero-app',
		imgUrl: 'https://res.cloudinary.com/darthsaul/image/upload/c_scale,w_1000/v1667275926/Portfolio/Screen_Shot_2022-11-01_at_12.11.58_AM_j7yfdq.png',
		imgUrl2: 'https://res.cloudinary.com/darthsaul/image/upload/v1667276033/Portfolio/Screen_Shot_2022-11-01_at_12.13.48_AM_bx1jdz.png',
		desc: `First large-scale project. Marvel API wrapper gives users ability to search Marvel database for comics and super heroes.`,
		bullets: [
			'Uses EJS for HTML dynamic templating.',
			'Responsive UI implemented via Bootstrap.',
			'Location data managed with Mapbox SDK.',
			'Passport.js authentication.',
			'Website security measures in place.',
		],
		id: 6,
	},
	portfolio: {
		name: 'Portfolio',
		headline: 'This website!',
		icon: faFolder,
		projectLink: '',
		githubLink: 'https://github.com/DarthSaul/portfolio',
		imgUrl: 'https://res.cloudinary.com/darthsaul/image/upload/c_scale,w_1000/v1631887582/Portfolio/github_dtjaxg.jpg',
		desc: 'This website! No prior template, and lots of inspiration from a wonderful place: the internet.',
		bullets: [
			'React.js single-page application.',
			'Designed primarily with custom CSS. Mobile-first responsive approach.',
			'Animations implemented with JavaScript.',
		],
		id: 7,
	},
};
export default projects;
