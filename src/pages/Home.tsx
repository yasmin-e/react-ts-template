import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home: React.FunctionComponent = () => {
  return (
    <Box maxWidth="xl" sx={{ overflow: 'hidden', px: 50, py: 40 }}>
      <Typography variant="h1">React Typescript Project Template</Typography>
      <Button
        variant="contained"
        color="secondary"
        href="/theme"
        sx={{ mx: 20, my: 2 }}
      >
        Click here to view MUI theme

      </Button>
    </Box>
  );
};

export default Home;
