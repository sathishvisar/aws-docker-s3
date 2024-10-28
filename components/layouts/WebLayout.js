// layouts/WebLayout.js
import React from 'react';
import { Container } from '@mui/material';

const WebLayout = ({ children }) => {
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '8rem' }} id='web-layout'>
      {children}
    </Container>
  );
};

export default WebLayout;
