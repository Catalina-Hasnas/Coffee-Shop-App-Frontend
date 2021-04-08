import axios from 'axios';

const api = axios.create({ baseURL: 'https://amdaris-ecommerce-default-rtdb.firebaseio.com/' });

export default api;