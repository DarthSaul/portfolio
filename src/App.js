import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import DevMain from './components/dev/Main';
import Projects from './components/dev/Projects';
import DevAbout from './components/dev/About';
import DevContact from './components/dev/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import NotFound from './components/layout/NotFound';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<Router>
			<>
				{/* <Navbar /> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dev" element={<DevMain />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<DevAbout />} />
					<Route path="/contact" element={<DevContact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				{/* <Footer /> */}
			</>
		</Router>
	);
};

export default App;
