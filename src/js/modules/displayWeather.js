// displayWeather.js

import { createIcons, icons } from 'lucide';
import { mapIconName } from './mapIconName.js';
import { doomMap } from './doomDescriptions.js';

export function displayWeather(weather) {
  const output = document.getElementById('weather-output');
  if (!output) return;

  // Precipitation info (conditionally built)
  let precipHTML = '';
  if (weather.precipProb > 0 && weather.precipAmount > 0) {
    precipHTML = `
      <p><span class="text-stone-400">Precipitation:</span> ${weather.precipAmount} mm</p>
      <p><span class="text-stone-400">Chance of Rain:</span> ${weather.precipProb}%</p>
    `;
  }

  const icon = mapIconName(weather.icon);
  const doomDescription = doomMap[weather.icon] || doomMap['unknown'];

  output.innerHTML = `
    <div class="bg-gray-900 p-6 rounded-md max-w-md w-full mx-auto shadow-lg border border-stone-700">
      <h2 class="text-2xl font-title text-accent mb-4">${weather.location}</h2>
      
      <div class="flex justify-center mb-4">
        <i data-lucide="${icon}" class="w-20 h-20 text-red-400"></i>
      </div>

      <p class="text-4xl font-bold mb-2">${weather.temperature}°C</p>
      <p class="text-stone-300 mb-4">Feels like ${weather.feelsLike}°C</p>

      <div class="space-y-2 text-left text-sm mb-4">
      <p class="italic text-purple-200 text-base text-center font-medium bg-gray-950 px-2 py-3 mb-4 rounded-md">${doomDescription}</p>
        <p><span class="text-stone-300">Conditions:</span> ${weather.conditions}</p>
        <p><span class="text-stone-300">Humidity:</span> ${weather.humidity}%</p>
        <p><span class="text-stone-300">Wind Speed:</span> ${weather.windSpeed} km/h</p>

        <!-- Injected only if needed -->
        ${precipHTML}
      </div>
    </div>
  `;

  createIcons({ icons });
}
