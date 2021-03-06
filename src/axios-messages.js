import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cv-web-712dc-default-rtdb.firebaseio.com/'
});

export default instance;