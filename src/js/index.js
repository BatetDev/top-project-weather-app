// index.js

import '../styles/output.css';
import { fetchWeather } from './modules/api.js';
import { processWeatherData } from './modules/processWeatherData.js';
import { setupIcons } from './modules/icons.js';
import { showLoading, hideLoading } from './modules/loading.js';

document.addEventListener('DOMContentLoaded', () => {
  setupIcons();

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
      console.log('Processed Weather Data:', weather);
    } catch (error) {
      console.error('Error fetching or processing weather:', error);
      alert('Failed to fetch weather data.');
    }

    hideLoading();
  });
});
