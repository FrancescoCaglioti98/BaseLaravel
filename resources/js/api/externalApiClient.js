import axios from "axios";

const externalApiClient = axios.create({
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

export default externalApiClient;
