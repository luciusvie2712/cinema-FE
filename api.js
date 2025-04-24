import axios from "./axiosInstance";

const getApi = () => {
    return axios.get('/api/movie/')
}