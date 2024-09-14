import apiClient from '@/axiosConfig';
import Cookies from 'js-cookie';

const API_URL = '/api/auth';

export async function loginUser(username, password) {
    try {
        const response = await apiClient.post(`${API_URL}/login`, {
            username,
            password
        });

        Cookies.set('jwtToken', response.data.jwtToken);
     
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

export async function registerUser(username, password) {
    try {
        const response = await apiClient.post(`${API_URL}/signup`, {
            username,
            password
        });
        return response.data;
    } catch (error) {
        
        console.error('Signup error:', error);
        throw error;
    }
}
