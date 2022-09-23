import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import DevHome from './components/dev/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import NotFound from './components/layout/NotFound';

import './App.css';

const App = () => {
	return (
		<Router>
			<>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dev" element={<DevHome />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</>
		</Router>
	);
};

export default App;
