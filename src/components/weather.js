import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Weather.css'; // Import the CSS file for styling

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const lat = 33.5062;
    const lon = 133.5465;

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const weatherResponse = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
                );
                setWeatherData(weatherResponse.data);

                const forecastResponse = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
                );
                setForecastData(forecastResponse.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [lat, lon, apiKey]);

    if (!weatherData || !forecastData) {
        return <div>Loading weather data...</div>;
    }

    const currentWeather = weatherData.weather[0].description;
    const currentTemp = weatherData.main.temp;
    const currentHumidity = weatherData.main.humidity;
    const currentIcon = weatherData.weather[0].icon;

    const forecast = forecastData.list.filter((_, index) => index % 8 === 0).slice(0, 5);

    return (
        <div className="weather-container">
            <div className="current-weather">
                <h4>Current Weather</h4>
                <img src={`https://openweathermap.org/img/wn/${currentIcon}@2x.png`} alt="Weather Icon" />
                <p>{currentWeather}</p>
                <p>Temp: {currentTemp}°C</p>
                <p>Humidity: {currentHumidity}%</p>
            </div>
            <div className="forecast">
                <h4>5-Day Forecast</h4>
                <div className="forecast-days">
                    {forecast.map((day, index) => (
                        <div key={index} className="forecast-day">
                            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather Icon" />
                            <p>{day.weather[0].description}</p>
                            <p>High: {day.main.temp_max}°C</p>
                            <p>Low: {day.main.temp_min}°C</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Weather;