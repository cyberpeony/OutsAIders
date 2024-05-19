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
    <div style={{ display: 'flex', height: '500px' }}>
      <div style={{ width: '70%', height: '100%' }}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={setViewport}
          mapboxApiAccessToken="pk.eyJ1Ijoic2VyYTIxMTIiLCJhIjoiY2x3Y3RoNDIxMTBkcDJrbml1djZpc2xiMSJ9.ajQXnwTxAhAOrG7S4dvQxg" 
          ref={mapContainer}
        >
          {places.map(place => (
            <Marker key={place.id} latitude={place.latitude} longitude={place.longitude}>
              <button 
                onClick={() => setSelectedPlace(place)} 
                style={{ cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <img src="/pin.svg" alt="Pin" width="30" height="30" /> 
              </button>
            </Marker>
          ))}

          {selectedPlace && (
            <Popup 
              latitude={selectedPlace.latitude} 
              longitude={selectedPlace.longitude} 
              onClose={() => setSelectedPlace(null)}
            >
              <div>
                <h2>{selectedPlace.name}</h2>
              </div>
            </Popup>
          )}
        </ReactMapGL>
      </div>

      <div style={{ width: '30%', height: '100%', overflowY: 'auto', padding: '20px' }}>
        <h3>Lista de Lugares:</h3>
        <ul>
          {places.map(place => (
            <li key={place.id} onClick={() => setSelectedPlace(place)}>
              {place.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapWithList;