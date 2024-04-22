import Country from './Country'

const CountriesList = ({countriesToShow, buttonLabel, handleChosen={handleChosen}} ) => {
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
              <Country key={country.cca2} country={country} buttonLabel={buttonLabel} handleChosen={handleChosen}/>
            )}
      </ul>
  )}

  export default CountriesList