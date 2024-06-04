import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const CountryDetails = ({ country }) => {
  const { name, region, languages, population, flags } = country;

  return (
    <Card className="country-details">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name.common}
        </Typography>
        <Box mt={2}>
          <Typography variant="body1">Region: {region}</Typography>
          <Typography variant="body1">Population: {population.toLocaleString()}</Typography>
          <Typography variant="body1">
            Languages: {Object.values(languages).join(', ')}
          </Typography>
        </Box>
        <Box mt={2}>
          <img src={flags.svg} alt={`${name.common} flag`} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryDetails;
