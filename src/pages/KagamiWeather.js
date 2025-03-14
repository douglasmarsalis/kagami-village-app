import React from 'react';
import '../styles/Weather.css';
import Weather from '../components/weather';

export default function KagamiWeather() {
  return (
      <div className="weather-page">
          <h1 className="display-4 text-center">Kagami Village Weather</h1>
          <Weather /> {/* Add the Weather component here */}
      </div>
  )
}
