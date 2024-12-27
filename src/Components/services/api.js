import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Set the token for authenticated requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const loginUser = (formData) => API.post('/users/login', formData);
export const fetchCases = () => API.get('/cases');
