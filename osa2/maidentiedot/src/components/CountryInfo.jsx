const CountryInfo = ({ countriesToShow }) => {

if (countriesToShow && countriesToShow.length === 1) {
  let languages = null;
  const countryObject = countriesToShow[0]

  languages = Object.keys(countryObject.languages).map(key => 
    <li value={key} key={key}>{countryObject.languages[key]}</li>
)

  const flagUrl = countryObject.flags.png

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

      </div>
    )
}
else {
  return null;
}
    
  }
  
  export default CountryInfo