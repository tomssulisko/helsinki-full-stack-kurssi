import axios from 'axios'
const countryApiUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = process.env.REACT_APP_WEATHER_KEY

const getAllCountries = () => {
    const request = axios.get(countryApiUrl)
    return request.then(response => response.data)
  }


//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

const getWeather = (id)  => {
  const request = axios.get(`${weatherApiUrl}?id=${id}&appid=${apiKey}`)
  return request.then(response => response.data)
}

export default {
    getAllCountries,
    getWeather
};