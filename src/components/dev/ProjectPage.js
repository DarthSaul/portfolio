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

	const { name, headline, imgUrl } = projectData;
	const { error, message } = errorData;

	return (
		<div className="container-fluid mb-5">
			{error ? (
				<>
					<div> Sorry, something went wrong! </div>
					<div> {message} </div>
				</>
			) : (
				<div className="row">
					<div className="col-xs-12 col-sm-7">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 display-3">
									{name}
								</div>
								<div className="col-xs-12 lead text-muted ps-3 mb-4">
									{headline}
								</div>
								<div className="col-xs-6 w-25 ps-3">
									<hr />
								</div>
								<div className="row">
									<div className="col-6">
										<div className="h1">text</div>
										<div>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Ea sit
											modi recusandae voluptate
											dignissimos? Sequi impedit alias
											temporibus magnam dolor? Est unde
											quibusdam natus repudiandae
											accusantium quae obcaecati esse
											incidunt.
										</div>
									</div>
									<div className="col-6">
										<div className="h1">text</div>
										<div>
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit. Ea sit
											modi recusandae voluptate
											dignissimos? Sequi impedit alias
											temporibus magnam dolor? Est unde
											quibusdam natus repudiandae
											accusantium quae obcaecati esse
											incidunt.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm container ps-5">
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
						<div className="col-xs-12">
							<img
								src={imgUrl}
								className="img-fluid rounded-3"
								alt="Project showcase"
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProjectPage;
