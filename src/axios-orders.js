import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://x-salada-default-rtdb.firebaseio.com/'
});

export default instance;