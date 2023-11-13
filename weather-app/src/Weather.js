/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import WeatherForecast from './components/weatherForecast';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // Step 1: State for user input
  const [greeting, setGreeting] = useState('');

  
  useEffect(() => {
    function ourGreeting(){
      const currentHour = new Date().getHours();

      if (currentHour >= 0 && currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good Afternoon');
      } else if(currentHour >= 18 && currentHour <= 23){
        setGreeting('Good Evening');
      }
      else{
        setGreeting('Good Night');
      }
    }

    ourGreeting()

    const intervalId = setInterval(ourGreeting,60000)

    return () => clearInterval(intervalId)
  },[])





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
    <>
      <Searchbar onCityChange={handleCityChange} />
      <div className='weatherInfo'>
        {weatherData ? (
          <div style={{ textAlign: 'center' }} className="weather-info-container">
            <h3>{greeting}</h3>
            {(greeting === 'Good Morning') ? (<img className='tod' src='/images/morning.png'/>) : null}
            {(greeting === 'Good Afternoon') ? (<img className='tod'  src='/images/afternoon.png'/>) : null}
            {(greeting === 'Good Evening') ? (<img className='tod' src='/images/half-moon.png'/>) : null}
            {(greeting === 'Good Night') ? (<img className='tod' src='/images/night-mode.png'/>) : null}
            <p className="city-name">{weatherData.location.name}</p>
            <p className="temperature">{weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</p>
            <img src='images/icons8-temperature-64.png' />
            <p className="description">{weatherData.current.condition.text}</p>
            {(weatherData.current.condition.text === "Partly cloudy") ? (<img src='/images/icons8-partly-cloudy-65.png' />) : null}
            {(weatherData.current.condition.text === "Clear Sky") ? (<img src='/images/icons8-sky-48.png' />) : null}
            {(weatherData.current.condition.text === "Patchy rain possible") ? (<img src='/images/icons8-cloud-with-rain-48.png' />) : null}
            {(weatherData.current.condition.text === "Patchy light drizzle") ? (<img src='images/icons8-drizzle-64.png' />) : null}
            {(weatherData.current.condition.text === "Light rain shower") ? (<img src='images/icons8-drizzle-64.png' />) : null}
            {(weatherData.current.condition.text === "Thunderstorms") ? (<img src='/images/icons8-snow-60.png' />) : null}
            {(weatherData.current.condition.text === "Foggy") ? (<img src='/images/icons8-partly-cloudy-65.png' />) : null}
            {(weatherData.current.condition.text === "Overcast") ? (<img src='/images/icons8-partly-cloudy-65.png' />) : null}
            {(weatherData.current.condition.text === "Mist") ? (<img src='/images/icons8-partly-cloudy-65.png' />) : null}
            {(weatherData.current.condition.text === "Hail") ? (<img src='/images/icons8-partly-cloudy-65.png' />) : null}
            {(weatherData.current.condition.text === "Windy") ? (<img src='/images/icons8-partly-cloudy-65.png' />) : null}
            {(weatherData.current.condition.text === 'Sunny') ? (<img src='images/icons8-sunny-64.png' />) : null}
            <p className="wind-speed">Wind Speed: {weatherData.current.wind_kph} kp/h</p>
            <img  style={{width:"64px",height:"64px"}} src='images/noun-wind-7745.png' />
            <p className="wind-direction">Wind Direction: {weatherData.current.wind_dir}</p>
            <p className='humidity'>Humidity: {weatherData.current.humidity}</p>
            <img src='images/icons8-humidity-64.png' />
            <p className='feels-like'>Feels like: {weatherData.current.feelslike_c}</p>
            {/* Add more weather data as needed */}

          </div>
        ) : (
          <img className='intocartoon' src='/images/upPoint.png'/>    
        )}
      </div>
      <WeatherForecast city={city} />



    </>
  );
}

export default Weather;

