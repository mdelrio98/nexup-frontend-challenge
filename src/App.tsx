import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container, Grid, Typography } from '@mui/material';
import ProductManager from './components/ProductManager';
import './api/mock'; 

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="lg"> 
        <Grid
          container
          width='100%'
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className="NexupFrontendChallenge"
        >
          <Grid item>
            <Typography variant="h6" component="h1" gutterBottom>
              Nexup Frontend Challenge
            </Typography>
          </Grid>
          <Grid item>
            <ProductManager />
          </Grid>
        </Grid>
      </Container>
    </QueryClientProvider>
  );
};

export default App;
