import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.dataatwork.org/v1/'
});

export default instance;