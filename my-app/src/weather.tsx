import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const apiKey = 'e44850606f5629a74920d61ac679b9d2';

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=New York City&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  const convertToFarhenheit = (celsius: number) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit.toFixed(0); // Round to one decimal place
  };

  return (
    <div className="weather-container">
      <button className="weather-button" onClick={fetchData}>See NYC Weather</button>
      {weatherData !== null && (
        <>
          <h2>{convertToFarhenheit(weatherData.main.temp)}°F</h2>
        </>
      )}
    </div>
  );
};

export default Weather;
