<<<<<<< HEAD
import apiClient from '@/axiosConfig';

const API_URL = '/lists';

export async function getAllLists(_id) {
    const response = await apiClient.get(`${API_URL}/all/${_id}`);
=======
import axios from 'axios';

const API_URL = 'http://localhost:8080/lists';

export async function getAllLists(_id) {
    const response = await axios.get(`${API_URL}/all/${_id}`);
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
    return response.data;
}

export async function addList(newList) {
<<<<<<< HEAD
    const response = await apiClient.post(`${API_URL}/addlist`, newList);
    return response.data._id;
}
export async function updateListCard(id, updatedListCard) {
    console.log("id List card : ",id);
    const response = await apiClient.put(`${API_URL}/editlists/${id}`, updatedListCard);
    return response.data;
}

export async function deleteListCard(id) {
    await apiClient.delete(`${API_URL}/deletelists/${id}`);
=======
    const response = await axios.post(`${API_URL}/addlist`, newList);
    return response.data._id;
>>>>>>> 6e920ba81ed350f0aa8415354139f72ac41904f9
}