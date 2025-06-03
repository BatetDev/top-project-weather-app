// modules/api.js
// Fetch raw weather data from Visual Crossing API

export async function fetchWeather(location) {
  const apiKey = 'DR8R9TFNZJNM2LKEGT5JHB6FC';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${apiKey}&unitGroup=metric&iconSet=icons2`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Raw API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}
