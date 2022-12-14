import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAP_API_KEY } from './constants';

const containerStyle = {
  width: '1440px',
  height: '400px',
  maxWidth: '100%',
};

export const center = {
  lat: 13.061372,
  lng: 77.6206347,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker key="marker" position={{ lat: center.lat, lng: center.lng }} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
