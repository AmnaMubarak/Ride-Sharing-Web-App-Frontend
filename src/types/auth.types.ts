interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'RIDER' | 'DRIVER';
}

interface UserCredentials {
  email: string;
  password: string;
}

interface RegisterData extends UserCredentials {
  firstName: string;
  lastName: string;
  confirmPassword: string;
  role: 'RIDER' | 'DRIVER';
}

interface AuthResponse {
  user: User;
  token: string;
} 