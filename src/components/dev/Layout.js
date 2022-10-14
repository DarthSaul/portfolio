import React from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from './Nav';
import VertNav from './VertNav';
import '../../css/Nav.css';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container fluid className="main-page-container">
				<Row className="d-md-none">
					<Col>
						<Nav />
					</Col>
				</Row>
				<Row className="pt-4">
					<Col xs={1} className="vertical-nav d-none d-md-block">
						<VertNav />
					</Col>
					<Col className="wrapper">
						<Outlet />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Layout;
