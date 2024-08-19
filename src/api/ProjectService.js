import axios from 'axios';

const API_URL = 'http://localhost:8080/projects';

export async function getAllProjects(_id) {
    const response = await axios.get(`${API_URL}/allprojects/${_id}`);
    return response.data;
}

export async function addProject(newProject) {
    const response = await axios.post(`${API_URL}/add`, newProject);
    return response.data._id;
}

export async function getProjectById(_id) {
    const response = await axios.get(`${API_URL}/${_id}`);
    return response.data;
}