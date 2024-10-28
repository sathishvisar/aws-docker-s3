import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import AuthLayout from '../components/layouts/AuthLayout';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user registration logic here
  };

  return (
    <AuthLayout>
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
          Register
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Register;
