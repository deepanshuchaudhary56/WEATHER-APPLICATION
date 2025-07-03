import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Failed to fetch weather data.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 p-4">
      <h1 className="text-4xl font-bold mb-6 text-white">🌤 Weather App</h1>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter city"
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Weather
        </button>
      </div>

      {weather && (
        <div className="mt-6 bg-white shadow-lg rounded-lg p-6 w-80 text-center">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="text-lg">🌡 Temp: {weather.main.temp}°C</p>
          <p>🌥 {weather.weather[0].description}</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>🌁 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
