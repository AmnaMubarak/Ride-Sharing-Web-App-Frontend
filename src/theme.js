import { createTheme } from '@mui/material/styles';

// Create reusable style constants
export const SPACING = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
};

export const COLORS = {
  primary: '#1976d2',
  error: '#d32f2f',
  // ... other colors
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#64b5f6',
      dark: '#1565c0',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#1976d2',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme; 