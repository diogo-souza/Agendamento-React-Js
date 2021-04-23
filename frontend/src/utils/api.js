import axios from 'axios';

// criação da chamada da API base

const myAxios = axios.create({
  baseURL: 'http://localhost:3004',
});

export default myAxios;
