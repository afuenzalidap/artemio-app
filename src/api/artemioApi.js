import axios from "axios";


const artemioApi = axios.create({
    baseURL: 'http://localhost:8080/api'
});

export default artemioApi;