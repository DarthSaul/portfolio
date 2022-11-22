import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/dev/Layout';
import Projects from './components/dev/Projects';
import About from './components/dev/About';
import ProjectPage from './components/dev/ProjectPage';
import Hero from './components/home/Hero';

// Bootstrap CSS & Bundle JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import './App.css';
import './css/App.css';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Hero />} />
					<Route
						path="projects"
						element={<Projects />}
					/>
					<Route
						path="project/:id"
						element={<ProjectPage />}
					/>
					<Route
						path="about"
						element={<About />}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
