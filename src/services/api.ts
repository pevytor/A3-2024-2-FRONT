import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-a3-asgz.onrender.com', // Substitua pela URL base da sua API
    timeout: 10000, // Tempo limite de 10 segundos
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
