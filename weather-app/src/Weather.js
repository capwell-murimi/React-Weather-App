import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // Step 1: State for user input

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0e64401e23d0448eb98170648232310&q=${city}`);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.log("Failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeatherData();
  }, [city]); // Step 2: Trigger the effect when 'city' changes

  // Step 2: Create a callback function to handle user input
  function handleCityChange(newCity) {
    setCity(newCity);
  }

  return (
    <div>
      <div className='weatherInfo'>
        <Searchbar onCityChange={handleCityChange} /> {/* Step 2: Pass the callback function */}
        {weatherData ? (
         <div style={{ textAlign: 'center' }} className="weather-info-container">
         <h2 className="weather-info-title">Weather Information</h2>
         <p className="city-name">{weatherData.location.name}</p>
         <p className="temperature">
           Temperature: {weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F
         </p>
         <p className="description">Description: {weatherData.current.condition.text}</p>
         <p className="wind-speed">Wind Speed: {weatherData.current.wind_kph} kp/h</p>
         <p className="wind-direction">Wind Direction: {weatherData.current.wind_dir}</p>
         <p className='humidity'>Humidity: {weatherData.current.humidity}</p>
         {/* Add more weather data as needed */}
       </div>

        ) : (
          <p>Enter City Name...</p>
        )}
      </div>
    </div>
  );
};

export default Weather;

