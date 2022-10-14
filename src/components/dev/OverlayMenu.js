import React from 'react';
import { Link } from 'react-router-dom';

const OverlayMenu = ({ toggle }) => {
	return (
		<div className="overlay-menu">
			<div className="container">
				<div className="row justify-content-end pt-3">
					<button
						type="button"
						className="btn-close btn-close-white h3"
						aria-label="Close"
						onClick={() => toggle(false)}
					/>
				</div>
			</div>
			<div className="container h-100">
				<div className="row h-75 justify-content-center align-items-center display-3 text-center">
					<div className="col-12">
						<div className="mb-1">
							<Link
								to="/"
								onClick={() => toggle(false)}
								className="text-white"
							>
								Projects
							</Link>
						</div>
						<div>
							<Link
								to="/about"
								onClick={() => toggle(false)}
								className="text-white"
							>
								About
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverlayMenu;
