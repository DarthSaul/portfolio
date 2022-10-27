import projects from '../utilities/projectsDev';

class ProjectDataService {
	getProjectById(id) {
		const index = Object.values(projects);
		return index.find((item) => item.id === parseInt(id));
	}
}

export default new ProjectDataService();
