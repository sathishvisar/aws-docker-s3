import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
// import { signIn } from 'next-auth/react';
import AuthLayout from '../components/layouts/AuthLayout';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle your login logic here, e.g., using NextAuth
    // const result = await signIn('credentials', { email, password });
    // Check the result and redirect or show error
  };

  return (
    <AuthLayout>
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" fullWidth type="submit">
          Login
        </Button>
      </form>
    </Container>
    </AuthLayout>
  );
};

export default Login;
