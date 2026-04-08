import { BrowserRouter, Routes, Route } from 'react-router';
import { Element } from 'react-scroll';
import Nav from './components/dev/Nav';
import Work from './components/dev/Work';
import About from './components/dev/About';
import Hero from './components/dev/Hero';
import WaveDivider from './components/dev/WaveDivider';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

import './css/App.css';

const MainPage = () => (
	<div className="content-container">
		<Element name="home">
			<Hero />
		</Element>
		<WaveDivider />
		<Element name="work">
			<Work />
		</Element>
		<WaveDivider />
		<Element name="about">
			<About />
		</Element>
	</div>
);

const App = () => {
	return (
		<BrowserRouter>
			<div className="main-page-container">
				<Nav />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
				<Route path="/blog" element={<BlogPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
