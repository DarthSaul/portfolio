import React from 'react';
import { Element } from 'react-scroll';
import Nav from './components/dev/Nav';
import Work from './components/dev/Work';
import About from './components/dev/About';
import Hero from './components/dev/Hero';
import Divider from './components/dev/Divider';

// Bootstrap CSS & Bundle JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './css/App.css';

const App = () => {
	return (
		<div className="main-page-container">
			<Nav />
			<div className="content-container">
				<Element name="home">
					<Hero />
				</Element>

				<Divider option={1} />

				<Element name="work">
					<Work />
				</Element>

				<Divider option={2} />

				<Element name="about">
					<About />
				</Element>
			</div>
		</div>
	);
};

export default App;
