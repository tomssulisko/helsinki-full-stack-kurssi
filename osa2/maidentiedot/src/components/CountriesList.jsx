import Country from './Country'

const CountriesList = ({countriesToShow, buttonLabel, handleChosen, chosenCountry} ) => {

if (!!chosenCountry) {
  return null;
}


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
    
  } else if (countriesToShow.length === 1) {
    handleChosen(countriesToShow[0])
/*
    return(
      <div>
      {countriesToShow.map(country => 
              <Country key={country.cca2} country={country}/>
            )}
      </div>
    )
*/
  } else return (
      <ul>
      {countriesToShow.map(country => 
              <Country key={country.cca2} country={country} buttonLabel={buttonLabel} handleChosen={handleChosen} chosenCountry={chosenCountry}/>
            )}
      </ul>
  )}

  export default CountriesList