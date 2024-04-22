import Country from './Country'

const CountriesList = ({countriesToShow, buttonLabel, handleInfo} ) => {
  if (!countriesToShow || countriesToShow.length === 0){
    return(
      <div>
        No matches
      </div>
    ) 
    
  } else if (countriesToShow.length > 10 ) {
    return(
      <div>
        Too many matches
      </div>
    )
    
  } else return (
      <ul>
      {countriesToShow.map(country => 
              <Country key={country.cca2} country={country} buttonLabel={buttonLabel}/>
            )}
      </ul>
  )}

  export default CountriesList