import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
// import VertNav from './VertNav';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="main-page-container">
				<Nav />
				<div className="content-container">
					<Outlet />
				</div>
			</div>
		);
	}
}

export default Layout;
