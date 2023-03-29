import React from 'react'
import googleMapReact from 'google-map-react';

function Map() {
	const location = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
		<div className='map'>
			<googleMapReact defaultCenter={location.center} defaultZoom={location.zoom}></googleMapReact>
		</div>
  )
}

export default Map
