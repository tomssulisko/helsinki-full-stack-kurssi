import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import countryService from './services/countryService';
import CountryInfo from './components/CountryInfo';
import CountriesList from './components/CountriesList';
import Notification from './components/Notification';
import CityList from './data/city.list.json'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filterPhrase, setFilterPhrase] = useState('')
  const [notification, setNotification] = useState({message: null, type: null})
  const [chosenCountry, setChosenCountry] = useState(null) 
  const [capitalWeather, setCapitalWeather]=useState(null)


  useEffect(() => {
    countryService.getAllCountries()
        .then(allCountries => {
            setCountries(allCountries);
            showNotification("Fetched all countries", "success")
        })
        .catch(error => {
          showNotification("Error while fetching all countries: "+error, "error")
            console.log("Error while fetching all countries:", error)
        });
}, []);


const getWeatherByCityId = (cityId) => {

  countryService
  .getWeather(cityId)
  .then(cityWeather => {
    setCapitalWeather(cityWeather)

    showNotification("Fetched city weather", "success")
  }).catch(error => {
    showNotification("Error while fetching city weather: "+error, "error")
    console.log("Error while fetching city weather ",error)
});



}

  const handleFilterChange = (phrase) => {
    setFilterPhrase(phrase)
    setChosenCountry(null)
  }

  const handleChosen = (country) => {
    selectedCountry(country)
  }


const selectedCountry = (country) => {
  setChosenCountry(country)
  const capitalId = CityList.find(city => city.name.includes(country.capital)).id
  getWeatherByCityId(capitalId)
}

  const countriesToShow = !filterPhrase
  ? countries
  : countries.filter(country => country.name.common.toLowerCase().includes(filterPhrase.toLowerCase()))

  const capital = !chosenCountry
  ? null
  : chosenCountry.capital

  const capitalId = (!capital || !CityList)
  ? null
  : CityList.find(city => city.name.includes(capital)).id

  const showNotification = (message, type) => {
    const showTime = 5000;
    setNotification(
      {message, type}
    )
    setTimeout(() => {
      setNotification({message: null, type: null})
    }, showTime)
  }

return (
  <div>
    <h1>Countries</h1>
    <Notification message={notification.message} type={notification.type} />

    <Filter phrase={filterPhrase} handleChange={handleFilterChange} />
    <br />
    <CountriesList countriesToShow={countriesToShow} buttonLabel={"show"} handleChosen={handleChosen} chosenCountry={chosenCountry}/>
    <br />
    <CountryInfo countriesToShow={countriesToShow} chosenCountry={chosenCountry} capital={capital} capitalId={capitalId} capitalWeather={capitalWeather}>asd</CountryInfo>
  </div>
)

}

export default App