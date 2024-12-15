import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Container,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  Stack,
} from '@mui/material';
import {
  Menu as MenuIcon,
  KeyboardArrowDown,
  AccountCircle,
  Close,
} from '@mui/icons-material';
import '../styles/Navbar.css';
import { useAuth } from '../context/AuthContext';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '#home' },
    { label: 'Services', path: '#services' },
    { label: 'About', path: '#about' },
    { label: 'Contact', path: '#contact' },
  ];

  const NavLogo = () => (
    <Typography 
      variant="h5" 
      component={Link} 
      to="/" 
      className="nav-logo"
      sx={{ 
        fontWeight: 700,
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      SWIFTRIDE
    </Typography>
  );

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          className={`navbar ${isScrolled ? 'scrolled' : ''}`}
          elevation={isScrolled ? 4 : 0}
        >
          <Container maxWidth="lg">
            <Toolbar className="toolbar">
              <NavLogo />

              {/* Desktop Menu */}
              <Box className="desktop-menu">
                <Stack direction="row" spacing={1}>
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      component={Link}
                      to={item.path}
                      color="inherit"
                      className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.path.substring(1))}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Stack>
              </Box>

              <Box className="nav-actions">
                {user ? (
                  <>
                    <IconButton
                      size="large"
                      onClick={handleMenu}
                      color="inherit"
                      className="profile-button"
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>
                        <AccountCircle />
                      </Avatar>
                      <KeyboardArrowDown />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      className="profile-menu"
                    >
                      <MenuItem component={Link} to="/profile">Profile</MenuItem>
                      <MenuItem component={Link} to="/trips">My Trips</MenuItem>
                      <MenuItem component={Link} to="/settings">Settings</MenuItem>
                      <MenuItem onClick={() => {
                        handleClose();
                        logout();
                      }}>Logout</MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() => navigate('/login')}
                      className="login-button"
                    >
                      Login
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => navigate('/signup')}
                      className="signup-button"
                    >
                      Sign Up
                    </Button>
                  </Stack>
                )}

                {/* Mobile Menu Button */}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className="mobile-menu-button"
                >
                  {mobileOpen ? <Close /> : <MenuIcon />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="mobile-drawer"
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box className="drawer-content">
          <Box className="drawer-header">
            <NavLogo />
            <IconButton onClick={handleDrawerToggle}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem 
                button 
                key={item.label}
                component={Link}
                to={item.path}
                // onClick={handleDrawerToggle}
                className={location.pathname === item.path ? 'active' : ''}
                onClick={() => handleNavClick(item.path.substring(1))}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          <Box className="drawer-actions">
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => navigate('/login')}
              className="drawer-login"
            >
              Login
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => navigate('/signup')}
              className="drawer-signup"
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar; 