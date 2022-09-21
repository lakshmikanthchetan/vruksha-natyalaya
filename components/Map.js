import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAP_API_KEY } from './constants';
import Link from 'next/link';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 13.061372,
  lng: 77.6206347,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <Link href={`https://maps.google.com/?q=${center.lat},${center.lng}`}>
          <Marker
            key="marker"
            position={{ lat: center.lat, lng: center.lng }}
          />
        </Link>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
