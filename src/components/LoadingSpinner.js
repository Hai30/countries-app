import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const LoadingSpinner = () => (
  <Box className="loading-spinner">
    <CircularProgress />
  </Box>
);

export default LoadingSpinner;
