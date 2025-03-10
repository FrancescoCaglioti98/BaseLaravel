import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const internalApiClient = axios.create({
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default internalApiClient;