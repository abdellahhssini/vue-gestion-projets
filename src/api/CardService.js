import apiClient from '@/axiosConfig';

const API_URL = '/api';

export async function getAllCards(_idListCard) {
    const response = await apiClient.get(`${API_URL}/all/${_idListCard}`);
    return response.data;
}

export async function addCard(newCard) {
    const response = await apiClient.post(`${API_URL}/cards/add`, newCard);
    return response.data._id;
}

export async function editCard(_id, updatedCard) {
    const response = await apiClient.put(`${API_URL}/cards/edit/${_id}`, updatedCard);
    console.log(response);
    return response.data;
}

export function deleteCard(_id) {
    return apiClient.delete(`${API_URL}/cards/delete/${_id}`);
}
