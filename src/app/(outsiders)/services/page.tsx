'use client';

import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Importa las imágenes de los pines

type Place = {
  id: number;
  name: string;
  category: 'supermarket' | 'stationery' | 'pharmacy' | 'restaurant';
  latitude: number;
  longitude: number;
};

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 20.659698,
    longitude: -103.349609,
    zoom: 11,
  });
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);

  const places: Place[] = [
    {
      id: 1,
      name: 'Supermercado 1',
      category: 'supermarket',
      latitude: 20.659698,
      longitude: -103.349609,
    },
    {
      id: 2,
      name: 'Papelería 1',
      category: 'stationery',
      latitude: 20.674833,
      longitude: -103.360331,
    },
    {
      id: 3,
      name: 'Farmacia 1',
      category: 'pharmacy',
      latitude: 20.648179,
      longitude: -103.422119,
    },
    {
      id: 4,
      name: 'Restaurante 1',
      category: 'restaurant',
      latitude: 20.66,
      longitude: -103.35,
    },
  ];

  useEffect(() => {
    if (selectedPlace) {
      setViewport((prev) => ({
        ...prev,
        latitude: selectedPlace.latitude,
        longitude: selectedPlace.longitude,
        zoom: 13,
      }));
    }
  }, [selectedPlace]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setViewport((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 13,
        }));
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  }, []);

  const getPinIcon = (category: string) => {
    switch (category) {
      case 'supermarket':
        return '/default-pin.png';
      case 'stationery':
        return '/default-pin.png';
      case 'pharmacy':
        return '/default-pin.png';
      case 'restaurant':
        return '/default-pin.png';
      default:
        return '/default-pin.png';
    }
  };

  const renderPlaceCategory = (category: string, places: Place[]) => (
    <div key={category}>
      <h3>{category}</h3>
      <ul>
        {places.map((place) => (
          <li
            key={place.id}
            onClick={() => setSelectedPlace(place)}
            style={{ cursor: 'pointer' }}
          >
            {place.name}
          </li>
        ))}
      </ul>
    </div>
  );

  const supermarketPlaces = places.filter((place) => place.category === 'supermarket');
  const stationeryPlaces = places.filter((place) => place.category === 'stationery');
  const pharmacyPlaces = places.filter((place) => place.category === 'pharmacy');
  const restaurantPlaces = places.filter((place) => place.category === 'restaurant');

  return (
    <div style={{ display: 'flex', height: '500px' }}>
      <div style={{ width: '70%', height: '100%' }}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken="pk.eyJ1Ijoic2VyYTIxMTIiLCJhIjoiY2x3Y3RoNDIxMTBkcDJrbml1djZpc2xiMSJ9.ajQXnwTxAhAOrG7S4dvQxg"
          ref={mapContainer}
          scrollZoom={true}
          dragPan={true}
        >
          {places.map((place) => (
            <Marker key={place.id} latitude={place.latitude} longitude={place.longitude}>
              <button 
                onClick={() => setSelectedPlace(place)} 
                style={{ cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <img src={getPinIcon(place.category)} alt="Pin" width="30" height="30" />
              </button>
            </Marker>
          ))}

          {userLocation && (
            <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
              <img src={'/user-location-pin.svg'} alt="User Location" width="30" height="30" />
            </Marker>
          )}

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
        {renderPlaceCategory('Supermercados', supermarketPlaces)}
        {renderPlaceCategory('Papelerías', stationeryPlaces)}
        {renderPlaceCategory('Farmacias', pharmacyPlaces)}
        {renderPlaceCategory('Restaurantes', restaurantPlaces)}
      </div>
    </div>
  );
}