import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Work from './components/dev/Work';
import VertNav from './components/dev/VertNav';
import Projects from './components/dev/Projects';
import About from './components/dev/About';
import Contact from './components/dev/Contact';

import './App.css';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<Router>
			<Container fluid className="main-page-container">
				<Row className="pt-4">
					<VertNav />
					<Col className="wrapper">
						<Routes>
							<Route path="/" element={<Work />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
						</Routes>
					</Col>
				</Row>
			</Container>
		</Router>
	);
};

export default App;
