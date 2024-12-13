import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Stack,
  Rating,
  Avatar,
  TextField,
} from '@mui/material';
import {
  Speed,
  Security,
  SupportAgent,
  LocalTaxi,
  LocationOn,
  Phone,
  Email,
} from '@mui/icons-material';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Fast Pickup',
      description: 'Get picked up within minutes of booking your ride'
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Safe Rides',
      description: 'All drivers are verified and rides are monitored'
    },
    {
      icon: <SupportAgent sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Customer service available round the clock'
    },
    {
      icon: <LocalTaxi sx={{ fontSize: 40 }} />,
      title: 'Multiple Options',
      description: 'Choose from various vehicle types and price ranges'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Commuter",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      comment: "RideShare has transformed my daily commute. The drivers are always professional and punctual.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Traveler",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      comment: "Perfect for business trips. Clean cars and reliable service every time.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      comment: "Affordable and safe rides for students. The student discount is a great bonus!",
      rating: 4
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <Box className="hero-section" id="home" 
           sx={{ 
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d)`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={6}>
              <Box className="hero-content">
                <Typography 
                  component="h1" 
                  className="hero-title"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    lineHeight: 1.1
                  }}
                >
                  Experience The New
                  <span className="hero-title-highlight"> Era of Ride-Sharing</span>
                </Typography>
                <Typography 
                  variant="h5" 
                  className="hero-subtitle"
                  sx={{ textAlign: { xs: 'center', md: 'left' } }}
                >
                  Safe, reliable, and comfortable rides at your fingertips
                </Typography>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2} 
                  className="hero-buttons"
                  sx={{ 
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    className="primary-button"
                    onClick={() => navigate('/signup')}
                  >
                    Book a Ride
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    className="secondary-button"
                    onClick={() => navigate('/signup')}
                  >
                    Become a Driver
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section (formerly Features) */}
      <Box className="section-container features-section" id="about">
        <Container maxWidth="lg">
          <div className="section-title-wrapper">
            <Typography variant="h2" className="section-title title-decoration">
              Why Choose SwiftRide?
            </Typography>
          </div>
          <Grid container spacing={4} className="features-grid">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="feature-card">
                  <CardContent>
                    <Box className="feature-icon">{feature.icon}</Box>
                    <Typography variant="h6" className="feature-title">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box className="section-container stats-section" id="about">
        <Container maxWidth="lg">
          <div className="section-title-wrapper">
            <Typography variant="h2" className="section-title title-decoration">
              Our Impact
            </Typography>
          </div>
          <Grid container spacing={4} className="stats-grid">
            <Grid item xs={12} sm={6} md={3}>
              <Box className="impact-card">
                <div className="impact-content">
                  <Typography variant="h2" className="impact-number">5M+</Typography>
                  <Typography variant="h6" className="impact-label">Happy Riders</Typography>
                  <Typography variant="body2" className="impact-description">
                    Satisfied customers who trust us daily
                  </Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="impact-card">
                <div className="impact-content">
                  <Typography variant="h2" className="impact-number">100K+</Typography>
                  <Typography variant="h6" className="impact-label">Verified Drivers</Typography>
                  <Typography variant="body2" className="impact-description">
                    Professional drivers at your service
                  </Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="impact-card">
                <div className="impact-content">
                  <Typography variant="h2" className="impact-number">50+</Typography>
                  <Typography variant="h6" className="impact-label">Cities</Typography>
                  <Typography variant="body2" className="impact-description">
                    Available across major cities
                  </Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="impact-card">
                <div className="impact-content">
                  <Typography variant="h2" className="impact-number">4.9</Typography>
                  <Typography variant="h6" className="impact-label">Average Rating</Typography>
                  <Typography variant="body2" className="impact-description">
                    Consistently high-rated service
                  </Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box className="section-container services-section" id="services">
        <Container maxWidth="lg">
          <div className="section-title-wrapper">
            <Typography variant="h2" className="section-title title-decoration">
              Our Services
            </Typography>
          </div>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Card className="service-card">
                <Box className="service-image" 
                     sx={{ backgroundImage: `url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2)` }}>
                </Box>
                <CardContent>
                  <Typography variant="h5">Economy</Typography>
                  <Typography variant="body2">Affordable daily rides</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="service-card">
                <Box className="service-image" 
                     sx={{ backgroundImage: `url(https://images.unsplash.com/photo-1563720223185-11003d516935)` }}>
                </Box>
                <CardContent>
                  <Typography variant="h5">Premium</Typography>
                  <Typography variant="body2">Luxury vehicles for special occasions</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className="service-card">
                <Box className="service-image" 
                     sx={{ backgroundImage: `url(https://images.unsplash.com/photo-1599256621730-535171e28e50)` }}>
                </Box>
                <CardContent>
                  <Typography variant="h5">Family</Typography>
                  <Typography variant="body2">Spacious vehicles for group travel</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box className="section-container testimonials-section">
        <Container maxWidth="lg">
          <div className="section-title-wrapper">
            <Typography variant="h2" className="section-title title-decoration">
              What Our Riders Say
            </Typography>
          </div>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="testimonial-card">
                  <CardContent>
                    <Box className="testimonial-header">
                      <Avatar
                        src={testimonial.image}
                        sx={{ width: 60, height: 60 }}
                      />
                      <Box ml={2}>
                        <Typography variant="h6">{testimonial.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly />
                    <Typography variant="body1" className="testimonial-comment">
                      "{testimonial.comment}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box className="cta-section" 
           sx={{ 
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1519641471654-76ce0107ad1b)`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" className="cta-title">
            Ready to Get Started?
          </Typography>
          <Typography variant="h5" align="center" className="cta-subtitle">
            Join millions of riders who trust RideShare for their daily commute
          </Typography>
          <Box className="cta-buttons">
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => navigate('/signup')}
            >
              Download App
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box className="section-container contact-section" id="contact">
        <Container maxWidth="lg">
          <div className="section-title-wrapper">
            <Typography variant="h2" className="section-title title-decoration">
              Contact Us
            </Typography>
            <Typography variant="h6" className="section-subtitle">
              Get in touch with us for any questions or support
            </Typography>
          </div>
          
          <Box className="contact-form-container">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card className="contact-info-card">
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Get In Touch
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </Typography>
                    <Box className="contact-details">
                      <Box className="contact-item">
                        <LocationOn className="contact-icon" />
                        <Typography>123 Business Avenue, New York, NY 10001</Typography>
                      </Box>
                      <Box className="contact-item">
                        <Phone className="contact-icon" />
                        <Typography>+1 (555) 123-4567</Typography>
                      </Box>
                      <Box className="contact-item">
                        <Email className="contact-icon" />
                        <Typography>support@swiftride.com</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card className="contact-form-card">
                  <CardContent>
                    <form className="contact-form">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="email"
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            variant="outlined"
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            className="submit-button"
                            type="submit"
                          >
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage; 