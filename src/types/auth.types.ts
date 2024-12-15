interface UserCredentials {
  email: string;
  password: string;
}

interface RegisterData extends UserCredentials {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

interface AuthResponse {
  user: User;
  token: string;
} 