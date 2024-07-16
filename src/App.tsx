import React from 'react';
import './App.css';
import ProductManager from './components/ProductManager';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container, Grid, Typography } from '@mui/material';
import './api/mock'; 

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="sm"> {/* Utiliza Container para limitar el ancho y centrar el contenido */}
        <Grid
          container
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
