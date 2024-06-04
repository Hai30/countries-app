import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <Box mb={2}>
    <TextField
      fullWidth
      label="Search for a country"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </Box>
);

export default SearchBar;

