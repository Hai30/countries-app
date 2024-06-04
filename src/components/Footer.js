import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box className="footer">
    <Typography variant="body2" color="inherit">
      © {new Date().getFullYear()} All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
