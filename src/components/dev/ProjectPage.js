import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProjectDataService from '../../services/projects';

const ProjectPage = () => {
	const [projectData, setProjectData] = useState({
		project: null,
		loading: true,
	});
	const [errorData, setError] = useState({
		error: false,
		message: null,
	});
	const { id } = useParams();

	useEffect(() => {
		const getProject = (id) => {
			const res = ProjectDataService.getProjectById(id);
			if (res) {
				setProjectData({
					...res,
					loading: false,
				});
			} else {
				setError({
					error: true,
					message: 'No project found.',
				});
			}
		};
		getProject(id);
	}, [id]);

	const { name, headline, imgUrl, desc, bullets, loading } = projectData;
	const { error, message } = errorData;

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className="container-fluid mb-5">
					{error ? (
						<>
							<div> Sorry, something went wrong! </div>
							<div> {message} </div>
						</>
					) : (
						<div className="row">
							<div className="col-xs-12 col-lg-7 mb-4">
								<div className="container-fluid px-0">
									<div className="row ">
										<div className="col-xs-12 display-3">
											{name}
										</div>
										<div className="col-xs-12 lead text-muted ps-3 mb-4">
											{headline}
										</div>
										<div className="col-xs-6 w-25 ps-3">
											<hr />
										</div>
										<div className="row ps-6">
											<div className="col-xs-12 mb-4 h4 fw-light">
												{desc}
											</div>
											<div className="col-xs-12">
												<div className="h4 mb-1">
													Highlights
												</div>
												<div className="text-muted">
													<ul className="list-unstyled">
														{bullets.map(
															(item, ind) => (
																<li key={ind}>
																	{'>'} {item}
																</li>
															)
														)}
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-lg container ps-3">
								<div className="col-xs-12 mb-5">
									<img
										src={imgUrl}
										className="img-fluid shadow rounded-3"
										alt="Project showcase"
									/>
								</div>
								<div className="col-xs-12 mb-5">
									<img
										src={imgUrl}
										className="img-fluid shadow rounded-3"
										alt="Project showcase"
									/>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default ProjectPage;
