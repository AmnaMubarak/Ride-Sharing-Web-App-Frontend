import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  Stack,
  TextField,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Apple,
  Android,
  Email,
  Phone,
  LocationOn,
  KeyboardArrowRight,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press', path: '/press' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: 'Ride', path: '/services/ride' },
      { label: 'Drive', path: '/services/drive' },
      { label: 'Deliver', path: '/services/deliver' },
      { label: 'Business', path: '/services/business' },
      { label: 'Cities', path: '/services/cities' },
    ],
    support: [
      { label: 'Help Center', path: '/help' },
      { label: 'Safety', path: '/safety' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'COVID-19 Resources', path: '/covid' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook />, url: '#', label: 'Facebook' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
    { icon: <Instagram />, url: '#', label: 'Instagram' },
    { icon: <LinkedIn />, url: '#', label: 'LinkedIn' },
  ];

  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        {/* Newsletter Section */}
        <Box className="newsletter-section">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" className="newsletter-title">
                Stay Updated with SwiftRide
              </Typography>
              <Typography variant="subtitle1" className="newsletter-subtitle">
                Subscribe to our newsletter for exclusive offers and updates
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="newsletter-form">
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  variant="outlined"
                  className="newsletter-input"
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<KeyboardArrowRight />}
                  className="newsletter-button"
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider className="footer-divider" />

        {/* Main Footer Content */}
        <Grid container spacing={6} className="footer-content">
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="brand-title">
              SWIFTRIDE
            </Typography>
            <Typography variant="body1" className="brand-description">
              Your trusted partner for safe and reliable rides. Available 24/7 for all your transportation needs.
            </Typography>
            <Stack direction="row" spacing={2} className="app-buttons">
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<Apple />}
                className="app-button"
              >
                App Store
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<Android />}
                className="app-button"
              >
                Google Play
              </Button>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-title">
              Company
            </Typography>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-title">
              Services
            </Typography>
            <ul className="footer-links">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-title">
              Support
            </Typography>
            <ul className="footer-links">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-title">
              Contact Us
            </Typography>
            <Stack spacing={2} className="contact-info">
              <Box className="contact-item">
                <Email className="contact-icon" />
                <Typography variant="body2">support@swiftride.com</Typography>
              </Box>
              <Box className="contact-item">
                <Phone className="contact-icon" />
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Box>
              <Box className="contact-item">
                <LocationOn className="contact-icon" />
                <Typography variant="body2">
                  123 Business Ave, Suite 100
                  <br />
                  San Francisco, CA 94107
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider className="footer-divider" />

        {/* Bottom Bar */}
        <Box className="footer-bottom">
          <Typography variant="body2" className="copyright">
            © {year} SwiftRide. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2} className="social-links">
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 