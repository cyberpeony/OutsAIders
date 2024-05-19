'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapWithList = () => {
  const [viewport, setViewport] = useState({
    latitude: 20.659698,
    longitude: -103.349609,
    zoom: 11
  });
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapContainer = useRef(null);

  const places = [
    {
      id: 1,
      name: 'Lugar 1',
      latitude: 20.659698, 
      longitude: -103.349609 
    },
    {
      id: 2,
      name: 'Lugar 2',
      latitude: 20.674833,
      longitude: -103.360331
    },
    {
      id: 3,
      name: 'Lugar 3',
      latitude: 20.648179,
      longitude: -103.422119
    }
  ];

  useEffect(() => {
    if (selectedPlace) {
      setViewport({
        latitude: selectedPlace.latitude,
        longitude: selectedPlace.longitude,
        zoom: 13
      });
    }
  }, [selectedPlace]);

  return (
    <p>Holamundo</p>
  );
};

export default MapWithList;