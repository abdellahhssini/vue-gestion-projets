import axios from 'axios';

const API_URL = 'http://localhost:8080/lists';

export async function getAllLists(_id) {
    const response = await axios.get(`${API_URL}/all/${_id}`);
    return response.data;
}

export async function addList(newList) {
    const response = await axios.post(`${API_URL}/addlist`, newList);
    return response.data._id;
}