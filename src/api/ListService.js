import apiClient from '@/axiosConfig';

const API_URL = '/lists';

export async function getAllLists(_id) {
    const response = await apiClient.get(`${API_URL}/all/${_id}`);
    return response.data;
}

export async function addList(newList) {
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
}