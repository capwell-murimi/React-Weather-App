import React, { useState, useEffect } from 'react';

function WeatherForecast({city}) {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        async function fetchForecastData() {
            try {
                const response = await fetch(
                    `https://api.weatherapi.com/v1/forecast.json?key=0e64401e23d0448eb98170648232310&q=${city}&days=7`
                );

                if (response.ok) {
                    const data = await response.json();
                    setForecastData(data.forecast.forecastday); // Set the fetched data to the state variable
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
    return (
        <div>
            {forecastData   ? <h1 style={{textAlign:"center"}}>ForeCast</h1>    :   null}
            <div className="weather-forecast">
                {forecastData ? (
                    <div className="forecast-container">
                        {forecastData.map((day, index) => (
                            <div key={index} className="forecast-item">
                                <p className="date">{day.date}</p>
                                <p className="max-temperature">Max Temp: {day.day.maxtemp_c}°C</p>
                                <p className="min-temperature">Min Temp: {day.day.mintemp_c}°C</p>
                                <p className="descriptio">Description: {day.day.condition.text}</p>
                                {/* Add more forecast data as needed */}
                            </div>
                        ))}
                    </div>
                ):(
                    null
                )}
            </div>
        </div>
    );
}

export default WeatherForecast