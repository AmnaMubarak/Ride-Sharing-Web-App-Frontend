import axios from 'axios';
import authService from './authService';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true  // Change this to true
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle token expiration and use handleApiError
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log the full error for debugging
    console.error('API Error:', error);
    
    const errorMessage = handleApiError(error);
    if (error.response?.status === 401) {
      authService.clearAuthData();
      window.location.href = '/login';
    }
    return Promise.reject(new Error(errorMessage));
  }
);

const handleApiError = (error) => {
  if (error.response) {
    // Get the error message from the server if available
    const serverMessage = error.response.data?.message;
    if (serverMessage) return serverMessage;

    switch (error.response.status) {
      case 400:
        return 'Invalid request data';
      case 401:
        return 'Please login to continue';
      case 403:
        return 'Access denied';
      case 404:
        return 'Resource not found';
      case 429:
        return 'Too many requests. Please try again later.';
      default:
        return `Server error: ${error.response.status}`;
    }
  }
  if (error.request) {
    // The request was made but no response was received
    return 'No response from server. Please check your connection.';
  }
  // Something happened in setting up the request
  return 'Failed to make request. Please try again.';
};

export default api;