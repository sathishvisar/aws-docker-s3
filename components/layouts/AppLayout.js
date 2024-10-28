// layouts/AppLayout.js
import React from 'react';
import { Container } from '@mui/material';

const AppLayout = ({ children }) => {
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '8rem' }} id='app-layout'>
      {children}
    </Container>
  );
};

export default AppLayout;
