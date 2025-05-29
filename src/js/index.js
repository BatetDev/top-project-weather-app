// index.js
// Set up weather app UI and handles form submission

import '../styles/output.css';
import { createIcons, icons } from 'lucide';
import { fetchWeather } from './modules/api.js';
import { processWeatherData } from './modules/processWeatherData.js';
import { showLoading, hideLoading } from './modules/loading.js';
import { displayWeather } from './modules/displayWeather.js';

document.addEventListener('DOMContentLoaded', () => {
  createIcons({ icons });

  const form = document.getElementById('weather-form');
  const input = document.getElementById('location-input');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = input.value.trim();
    if (!location) return;

    showLoading();

    try {
      const rawData = await fetchWeather(location);
      const weather = processWeatherData(rawData);

      displayWeather(weather);
    } catch (error) {
      console.error('Error fetching or processing weather:', error);
      alert('Failed to fetch weather data.');
    }

    hideLoading();
  });
});
