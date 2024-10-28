import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import Link from 'next/link';

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Our Chat Application
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Connect, Communicate, and Collaborate
      </Typography>
      
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">User Login</Typography>
            <Typography variant="body1">
              Access your account to start chatting and collaborating.
            </Typography>
            <Link href="/login" passHref>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Login
              </Button>
            </Link>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Register</Typography>
            <Typography variant="body1">
              New here? Create an account to join the conversation.
            </Typography>
            <Link href="/register" passHref>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Register
              </Button>
            </Link>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Explore Features</Typography>
            <Typography variant="body1">
              Discover our chat features, group calls, and more.
            </Typography>
            <Link href="/features" passHref>
              <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Learn More
              </Button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
