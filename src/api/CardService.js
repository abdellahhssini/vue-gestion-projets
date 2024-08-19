import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export async function getAllCards(_idListCard) {
    const response = await axios.get(`${API_URL}/all/${_idListCard}`);
    return response.data;
}

export async function addCard(newCard) {
    const response = await axios.post(`${API_URL}/cards/add`, newCard);
    return response.data._id;
}

export async function updateCard(_id, updatedCard) {
    const response = await axios.put(`${API_URL}/cards/edit/${_id}`, updatedCard);
    console.log(response);
    return response.data;
}

export function deleteCard(_id) {
    return axios.delete(`${API_URL}/cards/delete/${_id}`);
}
