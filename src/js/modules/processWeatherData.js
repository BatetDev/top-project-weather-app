// src/js/modules/processWeatherData.js

export function processWeatherData(data) {
  const current = data.currentConditions[0];

  return {
    location: data.resolvedAddress,
    temperatute: Number(current.temp.toFixed(1)),
    feelsLike: Number(current.feelsLike.toFixed(1)),
    humidity: current.humidity,
    windSpeed: Number(current.windSpeed.toFixed(1)),
    conditions: current.conditions,
    icon: current.icon,
    isDay: Boolean(current.sunrise && current.sunset),
    unitSystem: 'metric',
  };
}
