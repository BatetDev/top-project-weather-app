/* src/js/index.js */

import '../styles/output.css';
import { createIcons, icons } from 'lucide';
import { fetchWeather } from './modules/api.js';
import { processWeatherData } from './modules/processWeatherData.js';

document.addEventListener('DOMContentLoaded', () => {
  const iconSpan = document.getElementById('icon');
  const form = document.getElementById('weather-form');
  const input = document.getElementById('location-input');

  if (iconSpan) {
    iconSpan.innerHTML =
      '<i data-lucide="cloud-lightning" width="48" height="48" class="inline"></i>';
    createIcons({ icons });
  }

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
