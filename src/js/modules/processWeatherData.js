// modules/processWeatherData.js
// Transform raw Visual Crossing API data into a standardized format for the UI

export function processWeatherData(data) {
  const current = data.currentConditions;

  if (!current || typeof current !== 'object') {
    throw new Error('Invalid or missing current conditions in weather data');
  }

  return {
    location: data.resolvedAddress || 'Unknown Location',
    temperature: Number(current.temp?.toFixed(1) || 0),
    feelsLike: Number(current.feelslike?.toFixed(1) || 0),
    humidity: current.humidity || 0,
    windSpeed: Number(current.windspeed?.toFixed(1) || 0),
    conditions: current.conditions || 'Clear',
    icon: current.icon || 'cloud',
    precipAmount:
      current.precip !== null && current.precip !== undefined
        ? Number(current.precip.toFixed(1))
        : null,
    precipProb: current.precipprob ?? 0,
  };
}
