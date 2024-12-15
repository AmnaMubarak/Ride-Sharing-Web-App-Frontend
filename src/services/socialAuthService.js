import api from './api';
import authService from './authService';

const socialAuthService = {
  // Google Auth
  googleAuth: async (response) => {
    try {
      const result = await api.post('/auth/google', {
        token: response.credential
      });
      if (result.data.token) {
        localStorage.setItem('token', result.data.token);
        authService.isAuthenticated = true;
      }
      return result.data;
    } catch (error) {
      throw error.response?.data?.message || 'Google authentication failed';
    }
  },

  // Facebook Auth - Updated for new package
  facebookAuth: async (response) => {
    try {
      const result = await api.post('/auth/facebook', {
        accessToken: response.accessToken,
        userID: response.id // Note: changed from userID to id
      });
      if (result.data.token) {
        localStorage.setItem('token', result.data.token);
        authService.isAuthenticated = true;
      }
      return result.data;
    } catch (error) {
      throw error.response?.data?.message || 'Facebook authentication failed';
    }
  }
};

export default socialAuthService; 