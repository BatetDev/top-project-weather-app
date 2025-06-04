// index.js
// Set up weather app UI and handle form submission

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

    const errorDiv = document.getElementById('error-message');
    if (errorDiv) {
      errorDiv.classList.add('hidden');
      errorDiv.textContent = '';
    }

    showLoading();

    try {
      const rawData = await fetchWeather(location);
      const weather = processWeatherData(rawData);

      displayWeather(weather);
    } catch (error) {
      console.error('Error fetching or processing weather:', error);
      if (errorDiv) {
        errorDiv.textContent = 'Failed to fetch weather data.';
        errorDiv.classList.remove('hidden');
      }
    } finally {
      hideLoading();
    }
  });
});
