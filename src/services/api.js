import axios from 'axios';
import authService from './authService';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration and use handleApiError
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = handleApiError(error);
    return Promise.reject(new Error(errorMessage));
  }
);

// Add proper error handling and types
const handleApiError = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        return 'Invalid request data';
      case 401:
        authService.clearAuthData();
        return 'Session expired';
      case 403:
        return 'Access denied';
      case 404:
        return 'Resource not found';
      default:
        return 'An unexpected error occurred';
    }
  }
  return 'Network error';
};

export default api; 