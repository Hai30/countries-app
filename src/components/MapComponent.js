import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ country }) => {
  if (!country || !country.latlng) {
    return null;
  }

  const [lat, lng] = country.latlng;

  return (
    <MapContainer center={[lat, lng]} zoom={6} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>{country.name.common}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
