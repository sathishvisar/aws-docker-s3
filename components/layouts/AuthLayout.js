// layouts/AuthLayout.js
import React from 'react';
import { Container } from '@mui/material';

const AuthLayout = ({ children }) => {
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '8rem' }} id='auth-layout'>
      {children}
    </Container>
  );
};

export default AuthLayout;
