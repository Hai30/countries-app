import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => (
  <AppBar position="static" className="navbar">
    <Toolbar>
      <Typography variant="h6">
        Country Info App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
