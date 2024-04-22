import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import countryService from './services/countryService';
import CountryInfo from './components/CountryInfo';
import CountriesList from './components/CountriesList';
import Notification from './components/Notification';

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filterPhrase, setFilterPhrase] = useState('')
  const [notification, setNotification] = useState({message: null, type: null})


  useEffect(() => {
    countryService.getAll()
        .then(allCountries => {
            setCountries(allCountries);
        })
        .catch(error => {
          showNotification("Error while fetching all countries: "+error, "error")
            console.log("Error while fetching all countries:", error)
        });
}, []);


  const handleFilterChange = (phrase) => {
    setFilterPhrase(phrase)
  }

  const countriesToShow = !filterPhrase
  ? countries
  : countries.filter(country => country.name.common.toLowerCase().includes(filterPhrase.toLowerCase()))

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
    <CountriesList countriesToShow={countriesToShow} buttonLabel={"Info"}/>
    <br />
    <CountryInfo countriesToShow={countriesToShow}>asd</CountryInfo>

  </div>
)

}

export default App