import api from '../lib/axios';
import axios from 'axios';

export const authService = {
    async getCsrfToken() {
        await axios.get('/sanctum/csrf-cookie');
    },

    async register(formData) {
        await this.getCsrfToken();
        const response = await api.post('/register', formData, {
            headers: formData instanceof FormData 
                ? { 'Content-Type': 'multipart/form-data' }
                : { 'Content-Type': 'application/json' }
        });
        return response.data;
    },

    async login(formData) {
        await this.getCsrfToken();
        const response = await api.post('/login', formData, {
            headers: formData instanceof FormData 
                ? { 'Content-Type': 'multipart/form-data' }
                : { 'Content-Type': 'application/json' }
        });

        return response.data;
    },

    async logout() {
        const response = await api.post('/logout');
        return response.data;
    },

    async getUser() {
        const response = await api.get('/user');
        return response.data;
    },
};