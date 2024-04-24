
const CountryInfo = ({ countriesToShow, chosenCountry, capital, capitalWeather }) => {
  let countryObject = null
  let iconUrl = null
  let celsius = null
  let description = null
  let wind = null

  if (countriesToShow && countriesToShow.length === 1) {
  countryObject = countriesToShow[0]

  } else if (chosenCountry) {
    countryObject = chosenCountry
  }

  if (countryObject) {

    let languages = null;
  

    languages = Object.keys(countryObject.languages).map(key => 
      <li value={key} key={key}>{countryObject.languages[key]}</li>
  )

    const flagUrl = countryObject.flags.png

    if (capitalWeather) {
      iconUrl = " https://openweathermap.org/img/wn/"+capitalWeather.weather[0].icon+"@2x.png"
      celsius = (parseFloat(capitalWeather.main.temp)-273.15).toFixed(1)
      description = capitalWeather.weather[0].description
      wind = capitalWeather.wind.speed
    }

  return (
        <div>


          <h2>
            This is {countryObject.name.common}
          </h2>
          <img src={flagUrl}/>
          
          <br />
          Capital: {countryObject.capital}
          <br />
          Population: {countryObject.population}
          <br />
          Area: {countryObject.area}

          <ul>
            {languages}
          </ul>

          <h2>
          Weather in {capital}
          </h2>

          <b>
          {description}
          </b>
          <br />
          <img src={iconUrl}/>
          
          
          <br />
          Temperature: {celsius} Celsius
          <br />
          Wind: {wind} m/s
          <br />

          

        </div>
      )

  } else {
    return null;
  }
    
  }
  
  export default CountryInfo