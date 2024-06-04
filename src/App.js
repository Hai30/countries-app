import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Box, Typography } from '@mui/material';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import SearchBar from './components/SearchBar';
import MapComponent from './components/MapComponent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
        setLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Container className="container">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Country Information
          </Typography>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <CountryList countries={filteredCountries} onSelectCountry={setSelectedCountry} />
              </Grid>
              <Grid item xs={12} md={8}>
                {selectedCountry && (
                  <>
                    <CountryDetails country={selectedCountry} />
                    <MapComponent country={selectedCountry} />
                  </>
                )}
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default App;
