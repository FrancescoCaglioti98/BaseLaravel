import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null
    }),

    getters: {
        isLoggedIn: (state) => !!state.token
    },

    actions: {
        async login(credentials) {
            try {
                const response = await axios.post('/api/login', credentials);
                this.token = response.data.token;
                localStorage.setItem('token', this.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            } catch (error) {
                console.error("Errore di login", error);
            }
        },

        logout() {
            this.token = null;
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        },

        async fetchUser() {
            try {
                const response = await axios.get('/api/user');
                this.user = response.data;
            } catch (error) {
                this.logout(); // Se il token è scaduto, fai logout
            }
        }
    }
});
