import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333' //comando para que se possa utilizar métodos HTTP(GET, POST, etc.)
});

export default api;