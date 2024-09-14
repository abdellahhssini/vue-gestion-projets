<<<<<<< HEAD
import apiClient from '@/axiosConfig';

const API_URL = '/projects';

export async function getAllProjects(_id) {
    const response = await apiClient.get(`${API_URL}/allprojects/${_id}`);
=======
import axios from 'axios';

const API_URL = 'http://localhost:8080/projects';

export async function getAllProjects(_id) {
    const response = await axios.get(`${API_URL}/allprojects/${_id}`);
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
    return response.data;
}

export async function addProject(newProject) {
<<<<<<< HEAD
    const response = await apiClient.post(`${API_URL}/add`, newProject);
=======
    const response = await axios.post(`${API_URL}/add`, newProject);
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
    return response.data._id;
}

export async function getProjectById(_id) {
<<<<<<< HEAD
    const response = await apiClient.get(`${API_URL}/${_id}`);
    return response.data;
}

export async function updateProject(_id, newProject) {
    const response = await apiClient.put(`${API_URL}/edit/${_id}`, newProject);
    return response.data;
}

export async function deleteProject(_id) {
    const response = await apiClient.delete(`${API_URL}/delete/${_id}`);
=======
    const response = await axios.get(`${API_URL}/${_id}`);
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
    return response.data;
}