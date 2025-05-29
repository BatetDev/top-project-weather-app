// modules/displayWeather.js
// Render weather data to the DOM

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
  <div class="bg-vintage-pattern px-2 xs:px-2.5 md:px-4 py-4 xs:py-5 md:py-6 w-full max-w-xl rounded-xs border-4 md:border-6 border-double border-zinc-950/90">
    <h2 class="text-2xl md:text-4xl text-zinc-900/90 mb-4 md:mb-5 text-center ">${weather.location}</h2>
    
    <div class="flex justify-center mb-4 md:mb-5">
      <i data-lucide="${icon}" class="w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 text-purple-950/90"></i>
    </div>

    <p class="text-2xl xs:text-3xl md:text-4xl text-zinc-900/90 mb-2 text-center ">${weather.temperature}°C</p>
    <p class="text-lg xs:text-xl md:text-2xl text-zinc-900/90 text-center font-body italic mb-4 md:mb-6">Feels like ${weather.feelsLike}°C</p>

    <div class="flex flex-col items-center mb-4">
      <p class="italic text-zinc-50 text-center xs:text-xl md:text-2xl leading-snug md:leading-normal tracking-wide bg-zinc-950/95 px-2 xs:px-2.5 md:px-4 py-4 md:py-8 mb-4 md:mb-6 border border-transparent rounded-xs md:rounded-sm max-w-md font-body">${doomDescription}</p>
      
      <div class="w-full font-body md:text-xl space-y-1.5 border-t-2 border-b-2 border-zinc-900/90 py-3 md:py-4 px-2 md:px-3">
        <p class="border-b border-zinc-800/30 pb-1"><span class="text-zinc-800">Conditions:</span> ${weather.conditions}</p>
        <p class="border-b border-zinc-800/30 pb-1"><span class="text-zinc-800">Humidity:</span> ${weather.humidity}%</p>
        <p class="border-b border-zinc-800/30 pb-1"><span class="text-zinc-800">Wind Speed:</span> ${weather.windSpeed} km/h</p>
        ${precipHTML}
      </div>
    </div>
  </div>
`;

  createIcons({ icons });
}
