// src/js/modules/displayWeather.js

import { createIcons, icons } from 'lucide';

export function displayWeather(weather) {
  const output = document.getElementById('weather-output');
  if (!output) return;

  output.innerHTML = `
    <div class="bg-gray-900 p-6 rounded-md max-w-md w-full mx-auto shadow-lg border border-stone-700">
      <h2 class="text-2xl font-title text-accent mb-4">${weather.location}</h2>
      
      <div class="flex justify-center mb-4">
        <i data-lucide="${weather.icon}" class="w-12 h-12 text-cyan-200"></i>
      </div>

      <p class="text-5xl font-bold mb-2">${weather.temperature}°C</p>
      <p class="text-stone-400 mb-6">Feels like ${weather.feelsLike}°C</p>

      <div class="space-y-2 text-left text-sm">
        <p><span class="text-stone-400">Conditions:</span> ${weather.conditions}</p>
        <p><span class="text-stone-400">Humidity:</span> ${weather.humidity}%</p>
        <p><span class="text-stone-400">Wind Speed:</span> ${weather.windSpeed} km/h</p>
      </div>
    </div>
  `;

  createIcons({ icons });
}
