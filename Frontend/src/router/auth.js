import { defineStore } from 'pinia';
import internalApiClient from "@/api/internalApiClient";

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
                const response = await internalApiClient().post('/api/login', credentials);
                this.token = response.data.token;
                localStorage.setItem('token', this.token);
                internalApiClient.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            } catch (error) {
                console.error("Errore di login", error);
            }
        },

        logout() {
            this.token = null;
            localStorage.removeItem('token');
            delete internalApiClient.defaults.headers.common['Authorization'];
        },

        async fetchUser() {
            try {
                const response = await internalApiClient.get('/api/user');
                this.user = response.data;
            } catch (error) {
                this.logout(); // Se il token è scaduto, fai logout
            }
        }
    }
});
