import axios from 'axios';

// Criando a instância do Axios com configuração padrão
const api = axios.create({
    baseURL: 'http://seu-servidor-api.com/', // URL base da sua API Spring
    timeout: 10000, // Tempo limite para a requisição (10 segundos)
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptador de requisição (opcional)
// Adiciona o token de autenticação a todas as requisições, se você estiver usando JWT ou outro sistema de autenticação
api.interceptors.request.use(
    (config) => {
        // Se você tiver um token de autenticação, adicione aqui
        const token = localStorage.getItem('token'); // Exemplo de token armazenado no localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptador de resposta (opcional)
// Aqui você pode tratar erros globais, como erros de autenticação
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Tratar o erro globalmente (ex: se o token expirar)
        if (error.response && error.response.status === 401) {
            // Exemplo de como você pode redirecionar ou mostrar um alerta
            console.error('Token expirado ou não autorizado!');
        }
        return Promise.reject(error);
    }
);

export default api;