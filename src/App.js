import React from 'react';
import { Element } from 'react-scroll';
import Nav from './components/dev/Nav';
import Projects from './components/dev/Projects';
import About from './components/dev/About';
import Hero from './components/dev/Hero';

// Bootstrap CSS & Bundle JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import './App.css';
import './css/App.css';

const App = () => {
	return (
		<div className="main-page-container">
			<Nav />
			<div className="content-container">
				<Element name="home">
					<Hero />
				</Element>

				<Element name="work">
					<Projects />
				</Element>

				<Element name="about">
					<About />
				</Element>
			</div>
		</div>
	);
};

export default App;
