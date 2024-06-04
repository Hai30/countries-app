import React from 'react';
import { List, ListItem, ListItemText, Card, CardContent } from '@mui/material';

const CountryList = ({ countries, onSelectCountry }) => (
  <Card>
    <CardContent className="country-list">
      <List>
        {countries.map((country) => (
          <ListItem
            button
            key={country.cca3}
            onClick={() => onSelectCountry(country)}
            className="country-list-item"
          >
            <ListItemText primary={country.name.common} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
);

export default CountryList;

