import { API_KEY } from './APIKEY';

const openWeatherRequest = (path) => (
  fetch(`http://api.openweathermap.org/data/2.5${path}`)
    .then(data => data.json())
)

const ipLookupRequest = (path) => (
  fetch('http://ip-api.com/json')
    .then(data => data.json())
)

const fetchForecast = ({ weatherData, ipData }) => {
  const { city, countryCode } = ipData
  return openWeatherRequest(`/forecast/daily?q=${city},${countryCode}&units=imperial&cnt=3&appid=${API_KEY}`)
    .then(forecastData => ({ weatherData, ipData, forecastData }))
}

const fetchWeather = (ipData) => {
  const { city, countryCode } = ipData
  return openWeatherRequest(`/weather?q=${city},${countryCode}&units=imperial&appid=${API_KEY}`)
    .then(weatherData => fetchForecast({ weatherData, ipData }))
}

export const fetchData = (callback) => {
  return ipLookupRequest()
    .then(ipData => fetchWeather(ipData))
    .then(callback)
}
