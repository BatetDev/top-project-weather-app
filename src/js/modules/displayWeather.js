// modules/displayWeather.js

import { createIcons, icons } from 'lucide';
import { mapIconName } from './mapIconName.js';
import { doomMap } from './doomDescriptions.js';

export function displayWeather(weather) {
  const output = document.getElementById('weather-output');
  if (!output) return;

  let precipHTML = '';
  if (weather.precipProb > 0 && weather.precipAmount > 0) {
    precipHTML = `
      <p class="border-b border-zinc-800/30"><span class="text-zinc-800">Precipitation:</span> ${weather.precipAmount} mm</p>
      <p class="border-b border-zinc-800/30"><span class="text-zinc-800">Chance of Rain:</span> ${weather.precipProb}%</p>
    `;
  }

  const icon = mapIconName(weather.icon);
  const doomDescription = doomMap[weather.icon] || doomMap['unknown'];

  output.innerHTML = `
    <div class="bg-vintage-pattern p-4 max-w-md w-full mx-auto border-4 border-double border-zinc-900 shadow-[5px_5px_0_0_rgba(24,24,27,1)]">
      <h2 class="text-3xl text-zinc-900 mb-4 text-center">${weather.location}</h2>
      
      <div class="flex justify-center mb-4">
        <i data-lucide="${icon}" class="w-16 h-16 text-fuchsia-950"></i>
      </div>

      <p class="text-3xl mb-2 text-center">${weather.temperature}°C</p>
      <p class="text-zinc-800 mb-4 text-center font-body">Feels like ${weather.feelsLike}°C</p>

      <div class="space-y-2 text-left text-sm mb-4">
        <p class="italic text-zinc-50 text-base text-center font-body bg-zinc-900 px-4 py-3 mb-4 border border-zinc-900 rounded-sm">${doomDescription}</p>
        
        <div class="font-body space-y-1 border-t-2 border-b-2 border-zinc-900 py-3 px-2">
          <p class="border-b border-zinc-800/30"><span class="text-zinc-800">Conditions:</span> ${weather.conditions}</p>
          <p class="border-b border-zinc-800/30"><span class="text-zinc-800">Humidity:</span> ${weather.humidity}%</p>
          <p class="border-b border-zinc-800/30"><span class="text-zinc-800">Wind Speed:</span> ${weather.windSpeed} km/h</p>
          ${precipHTML}
        </div>
      </div>
    </div>
  `;

  createIcons({ icons });
}
