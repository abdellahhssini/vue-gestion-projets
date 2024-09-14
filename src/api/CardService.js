<<<<<<< HEAD
import apiClient from '@/axiosConfig';

const API_URL = '/api';

export async function getAllCards(_idListCard) {
    const response = await apiClient.get(`${API_URL}/all/${_idListCard}`);
=======
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export async function getAllCards(_idListCard) {
    const response = await axios.get(`${API_URL}/all/${_idListCard}`);
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
    return response.data;
}

export async function addCard(newCard) {
<<<<<<< HEAD
    const response = await apiClient.post(`${API_URL}/cards/add`, newCard);
=======
    const response = await axios.post(`${API_URL}/cards/add`, newCard);
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
    return response.data._id;
}

export async function editCard(_id, updatedCard) {
<<<<<<< HEAD
    const response = await apiClient.put(`${API_URL}/cards/edit/${_id}`, updatedCard);
=======
    const response = await axios.put(`${API_URL}/cards/edit/${_id}`, updatedCard);
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
    console.log(response);
    return response.data;
}

export function deleteCard(_id) {
<<<<<<< HEAD
    return apiClient.delete(`${API_URL}/cards/delete/${_id}`);
=======
    return axios.delete(`${API_URL}/cards/delete/${_id}`);
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
}
