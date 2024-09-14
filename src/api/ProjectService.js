import apiClient from '@/axiosConfig';

const API_URL = '/projects';

export async function getAllProjects(_id) {
    const response = await apiClient.get(`${API_URL}/allprojects/${_id}`);
    return response.data;
}

export async function addProject(newProject) {
    const response = await apiClient.post(`${API_URL}/add`, newProject);
    return response.data._id;
}

export async function getProjectById(_id) {
    const response = await apiClient.get(`${API_URL}/${_id}`);
    return response.data;
}

export async function updateProject(_id, newProject) {
    const response = await apiClient.put(`${API_URL}/edit/${_id}`, newProject);
    return response.data;
}

export async function deleteProject(_id) {
    const response = await apiClient.delete(`${API_URL}/delete/${_id}`);
    return response.data;
}