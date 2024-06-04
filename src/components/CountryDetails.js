import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const CountryDetails = ({ country }) => {
  const { name, region, capital, languages, population, area, flags, currencies } = country;
  const currency = Object.values(currencies)[0];

  return (
    <Card className="country-details">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name.common}
        </Typography>
        <Box mt={2}>
          <Typography variant="body1">Region: {region}</Typography>
          <Typography variant="body1">Capital: {capital}</Typography>
          <Typography variant="body1">Area: {area.toLocaleString()} km²</Typography>

          <Typography variant="body1">Population: {population.toLocaleString()}</Typography>
          <Typography variant="body1">
            Languages: {Object.values(languages).join(', ')}
          </Typography>
          {currency && (
            <Typography variant="body1">
              Currency: {currency.name} ({currency.symbol})
            </Typography>
          )}
        </Box>
        <Box mt={2}>
          <img src={flags.svg} alt={`${name.common} flag`} className="flag-image" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryDetails;
