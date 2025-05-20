/* src/js/index.js */

import '../styles/output.css';
import { fetchWeather } from './modules/api.js';
import { processWeatherData } from './modules/processWeatherData.js';
import { setupIcons } from './modules/icons.js'; // 👈 Updated import

document.addEventListener('DOMContentLoaded', () => {
  setupIcons(); // 👈 More flexible and scalable

  const form = document.getElementById('weather-form');
  const input = document.getElementById('location-input');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = input.value.trim();
    if (!location) return;

    console.log('Fetching weather for:', location);

    const rawData = await fetchWeather(location);
    const weather = processWeatherData(rawData);

    console.log('Processed Weather Data:', weather);
  });
});
