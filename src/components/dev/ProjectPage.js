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

	const { name } = projectData;
	const { error, message } = errorData;

	return (
		<div>
			{error ? (
				<>
					<div> Sorry, something went wrong! </div>
					<div> {message} </div>
				</>
			) : (
				<>
					<div>{name}</div>
					<div>ProjectPage {name}</div>
				</>
			)}
		</div>
	);
};

export default ProjectPage;
