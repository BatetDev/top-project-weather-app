// modules/mapIconName.js

export function mapIconName(iconString = 'clear-day') {
  const iconMap = {
    // iconSet=icons1
    snow: 'snowflake',
    rain: 'cloud-rain',
    fog: 'cloud-fog',
    wind: 'wind',
    cloudy: 'cloud',
    'partly-cloudy-day': 'cloud-sun',
    'partly-cloudy-night': 'cloud-moon',
    'clear-day': 'sun',
    'clear-night': 'moon',

    // iconSet=icons2
    'thunder-rain': 'cloud-lightning',
    'thunder-showers-day': 'cloud-lightning',
    'thunder-showers-night': 'cloud-lightning',
    'snow-showers-day': 'snowflake',
    'snow-showers-night': 'snowflake',
    'showers-day': 'cloud-drizzle',
    'showers-night': 'cloud-drizzle',
    hail: 'cloud-hail',
    tornado: 'tornado',
    'mixed-rain-hail': 'cloud-hail',
    'freezing-rain': 'cloud-hail',
    'light-freezing-rain': 'cloud-hail',
    'ice-fog': 'cloud-snow',
    'blowing-snow': 'snowflake',
    overcast: 'cloud',
    'mostly-clear': 'moon',
    'mostly-cloudy': 'cloud',
    'scattered-clouds': 'cloud',
    'broken-clouds': 'cloud',
    'few-showers': 'cloud-drizzle',
    'scattered-showers': 'cloud-rain',
    'few-thunderstorms': 'cloud-lightning',
    unknown: 'help-circle',
  };

  return iconMap[iconString] || 'skull';
}

/* Visual Crossing API docs about icons

https://www.visualcrossing.com/resources/documentation/weather-api/defining-icon-set-in-the-weather-api/

*/
