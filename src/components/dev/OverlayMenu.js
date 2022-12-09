import React from 'react';
import { Link } from 'react-router-dom';

const OverlayMenu = ({ toggle, menu }) => {
	const menuState = menu ? 'open-nav' : 'close';

	return (
		<div className={`overlay-menu d-md-none  ${menuState}`}>
			<div className="container mb-5">
				<div className="row justify-content-between align-items-center pt-2 pe-3">
					<div className="col-auto text-light fs-2">
						Saul <span>Graves</span>
					</div>
					<button
						type="button"
						className="btn-close btn-close-white"
						aria-label="Close"
						onClick={() => toggle(false)}
					/>
				</div>
			</div>
			<div className="container ">
				<div className="row fs-2 gy-3">
					<div className="col-12">
						<Link
							to="/"
							onClick={() =>
								toggle(false)
							}
							className="text-white"
						>
							Home
						</Link>
					</div>

					<div className="col-12">
						<Link
							to="/projects"
							onClick={() =>
								toggle(false)
							}
							className="text-white"
						>
							Work
						</Link>
					</div>

					<div className="col-12">
						<Link
							to="/about"
							onClick={() =>
								toggle(false)
							}
							className="text-white"
						>
							About
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverlayMenu;
