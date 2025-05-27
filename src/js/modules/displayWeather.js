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
      <p class="border-b border-zinc-800/40"><span class="text-zinc-800/90">Precipitation:</span> ${weather.precipAmount} mm</p>
      <p class="border-b border-zinc-800/40"><span class="text-zinc-800/90">Chance of Rain:</span> ${weather.precipProb}%</p>
    `;
  }

  const icon = mapIconName(weather.icon);
  const doomDescription = doomMap[weather.icon] || doomMap['unknown'];

  output.innerHTML = `
    <div class="bg-vintage-pattern px-2 py-4 xs:px-2.5 xs:py-5 max-w-md w-full mx-auto border-4 border-double border-zinc-900/90">
      <h2 class="text-2xl text-zinc-900/90 mb-4 text-center font-bold">${weather.location}</h2>
      
      <div class="flex justify-center mb-4">
        <i data-lucide="${icon}" class="w-16 h-16 text-purple-900/90"></i>
      </div>

      <p class="text-2xl text-zinc-900/90 mb-2 text-center font-semibold">${weather.temperature}°C</p>
      <p class="text-zinc-900/90 text-center italic mb-4">Feels like ${weather.feelsLike}°C</p>

      <div class="space-y-2 text-left mb-4">
        <p class="italic text-zinc-50 text-center leading-tight bg-zinc-950/95 p-3 mb-4 border border-zinc-900/90 rounded-sm">${doomDescription}</p>
        
        <div class="font-body space-y-1 border-t-2 border-b-2 border-zinc-900/90 py-3 px-1.5">
          <p class="border-b border-zinc-800/40"><span class="text-zinc-800/90">Conditions:</span> ${weather.conditions}</p>
          <p class="border-b border-zinc-800/40"><span class="text-zinc-800/90">Humidity:</span> ${weather.humidity}%</p>
          <p class="border-b border-zinc-800/40"><span class="text-zinc-800/90">Wind Speed:</span> ${weather.windSpeed} km/h</p>
          ${precipHTML}
        </div>
      </div>
    </div>
  `;

  createIcons({ icons });
}
