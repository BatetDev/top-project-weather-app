// modules/mapIconName.js
// Map Visual Crossing API weather icons to Lucide icon names.

export function mapIconName(iconString = 'clear-day') {
  const iconMap = {
    // iconSet=icons1
    snow: 'snowflake',
    rain: 'cloud-rain',
    fog: 'cloud-fog',
    wind: 'wind',
    cloudy: 'cloudy',
    'partly-cloudy-day': 'cloud-sun',
    'partly-cloudy-night': 'cloud-moon',
    'clear-day': 'sun',
    'clear-night': 'moon',

    // iconSet=icons2
    'thunder-rain': 'cloud-lightning',
    'thunder-showers-day': 'cloud-lightning',
    'thunder-showers-night': 'cloud-lightning',
    'snow-showers-day': 'cloud-snow',
    'snow-showers-night': 'cloud-snow',
    'showers-day': 'cloud-sun-rain',
    'showers-night': 'cloud-moon-rain',
    hail: 'cloud-hail',
    tornado: 'tornado',
    'mixed-rain-hail': 'cloud-hail',
    'freezing-rain': 'cloud-snow',
    'light-freezing-rain': 'cloud-hail',
    'ice-fog': 'cloud-snow',
    'blowing-snow': 'snowflake',
    overcast: 'cloud',
    'mostly-clear': 'moon',
    'mostly-cloudy': 'cloudy',
    'scattered-clouds': 'cloud',
    'broken-clouds': 'cloud',
    'few-showers': 'cloud-drizzle',
    'scattered-showers': 'cloud-rain',
    'few-thunderstorms': 'cloud-lightning',
    unknown: 'circle-help',
  };

  return iconMap[iconString] || 'skull';
}

/* Visual Crossing API docs about icons

https://www.visualcrossing.com/resources/documentation/weather-api/defining-icon-set-in-the-weather-api/

*/
