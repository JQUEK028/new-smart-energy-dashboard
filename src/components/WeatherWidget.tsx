'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { CloudIcon, SunIcon } from '@heroicons/react/24/solid';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    }

    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <div className="bg-[#E1F5FE] border border-gray-400 rounded-lg p-6 text-black text-center">
        Loading weather...
      </div>
    );
  }

  const { temp, feels_like, humidity, temp_min, temp_max } = weather.main;
  const { speed: windSpeed } = weather.wind;
  const { main: condition, icon } = weather.weather[0];
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-SG', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-SG', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const today = new Date();

  return (
    <div className="bg-[#E1F5FE] border border-gray-400 rounded-lg p-6 text-black w-full h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="font-semibold text-xl">
            {today.toLocaleDateString('en-US', { weekday: 'long' })}
          </p>
          <p className="text-md">
            {today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather Icon"
          className="w-16 h-16"
        />
      </div>

      {/* Main Weather Info */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-5xl font-bold">{Math.round(temp)}°C</p>
          <p className="text-md">High: {Math.round(temp_max)}° Low: {Math.round(temp_min)}°</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold">{condition}</p>
          <p className="text-sm">Feels like {Math.round(feels_like)}°C</p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center justify-between bg-white px-3 py-2 rounded shadow">
          <span className="font-semibold">Humidity:</span>
          <div className="flex items-center gap-1">
            <CloudIcon className="w-4 h-4 text-blue-400" />
            {humidity}%
          </div>
        </div>
        <div className="flex items-center justify-between bg-white px-3 py-2 rounded shadow">
          <span className="font-semibold">Wind Speed:</span>
          <span>{windSpeed} m/s</span>
        </div>
        <div className="flex items-center justify-between bg-white px-3 py-2 rounded shadow">
          <span className="font-semibold">Sunrise:</span>
          <span>{sunrise}</span>
        </div>
        <div className="flex items-center justify-between bg-white px-3 py-2 rounded shadow">
          <span className="font-semibold">Sunset:</span>
          <span>{sunset}</span>
        </div>
      </div>
    </div>
  );
}
