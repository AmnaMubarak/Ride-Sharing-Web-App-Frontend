import api from './api';
import { jwtDecode } from 'jwt-decode';

class AuthService {
  constructor() {
    this.checkAuth();
  }

  checkAuth() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  setAuthData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  async login(email, password) {
    try {
      const response = await api.post('/auth/login', { email, password });
      if (response.data.token) {
        this.setAuthData(response.data.token, response.data.user);
        return response.data;
      }
      throw new Error('Login failed');
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData);
      if (response.data.token) {
        this.setAuthData(response.data.token, response.data.user);
        return response.data;
      }
      throw new Error('Registration failed');
    } catch (error) {
      throw this.handleApiError(error);
    }
  }

  logout() {
    this.clearAuthData();
    window.location.href = '/login';
  }

  handleApiError(error) {
    if (error.response) {
      const message = error.response.data?.message || error.response.data;
      switch (error.response.status) {
        case 400:
          return new Error(message || 'Invalid request data');
        case 401:
          this.clearAuthData();
          return new Error(message || 'Invalid credentials');
        case 403:
          return new Error(message || 'Access denied');
        case 404:
          return new Error(message || 'Resource not found');
        default:
          return new Error(message || 'An unexpected error occurred');
      }
    }
    return new Error('Network error');
  }
}

const authServiceInstance = new AuthService();
export default authServiceInstance; 