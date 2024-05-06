import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { coldActivity, moderateActivity, warmActivity, ActivityItem } from './data/activity-data';

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const apiKey = 'e44850606f5629a74920d61ac679b9d2';

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=New York City&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const convertToFarhenheit = (celsius: number) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return parseFloat(fahrenheit.toFixed(0));
  };

  return (
    <div className="weather-container">
      <div className="weather-header">
        <button className="weather-button" onClick={fetchData}>See NYC Weather</button>
        {weatherData && (
          <>
            <h2 className='temp'>{convertToFarhenheit(weatherData.main.temp)}°F</h2>
            <h2>{weatherData.weather[0].description}</h2>
          </>
        )}
      </div>
      {weatherData && (
        <ul>
          {convertToFarhenheit(weatherData.main.temp) < 50 ? (
            coldActivity.map((item: ActivityItem, index: number) => (
              <li key={index}>
                <span>{item.name}</span>
                {item.price && <span className="price">free</span>}
              </li>
            ))
          ) : convertToFarhenheit(weatherData.main.temp) >= 50 && convertToFarhenheit(weatherData.main.temp) < 70 ? (
            moderateActivity.map((item: ActivityItem, index: number) => (
              <li key={index}>
                <span>{item.name}</span>
                {item.price && <span className="price">free</span>}
              </li>
            ))
          ) : (
            warmActivity.map((item: ActivityItem, index: number) => (
              <li key={index}>
                <span>{item.name}</span>
                {item.price && <span className="price">free</span>}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Weather;
