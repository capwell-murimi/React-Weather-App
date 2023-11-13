import React, { useState, useEffect } from 'react';

function WeatherForecast({ city }) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    async function fetchForecastData() {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=0e64401e23d0448eb98170648232310&q=${city}&days=7`
        );

        if (response.ok) {
          const data = await response.json();
          setForecastData(data.forecast.forecastday);
        } else {
          console.log("Failed to fetch forecast data");
        }
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    }

    if (city) {
      fetchForecastData();
    }
  }, [city]);

  function getDayOfWeek(dateString) {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const date = new Date(dateString);
        const dayOfWeek = date.getDay(); // 0 for Sunday, 1 for Monday, etc.
        return daysOfWeek[dayOfWeek];
    }

  return (
    <div>
      <div style={{ height: "auto"}} className="weather-forecast">
        {forecastData ? <h1 style={{ textAlign: "center", color: "black" }}>ForeCast</h1> : null}
        {forecastData ? (
          <div className="forecast-container">
            {forecastData.map((day, index) => (
              <div key={index} className="forecast-item">
                <p className="day">{getDayOfWeek(day.date)}</p>
                <p className="max-temperature">Max: {day.day.maxtemp_c}°C</p>
                <p className="min-temperature">Min: {day.day.mintemp_c}°C</p>
                <p className="description">{day.day.condition.text}</p>
                {/* Add more forecast data as needed */}
                {day.day.condition.text === 'Patchy rain possible' ? (
                  <img src="/images/icons8-rain-64.png" alt="Rainy" />
                ) : null}
                {day.day.condition.text === 'Moderate rain' ? (
                  <img src="/images/icons8-moderate-rain-48.png" alt="Moderate Rain" />
                ) : null}
                {day.day.condition.text === 'Sunny' ? (
                  <img src="/images/icons8-sunny-64.png" alt="Sunny" />
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default WeatherForecast;
