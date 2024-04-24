const Country = ({ country, buttonLabel, handleChosen, chosenCountry }) => {

  if (buttonLabel && !chosenCountry) {

  
    return (
      <li key={country.cca2} >{country.name.common} &nbsp;
      <button onClick={() =>handleChosen(country)}>{buttonLabel}</button>
      </li>
    )
  } else {
    return (
      null
    )


  }

  }
  
  export default Country