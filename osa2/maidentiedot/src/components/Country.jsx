const Country = ({ country, buttonLabel, handleChosen }) => {
    return (
      <li key={country.cca2} >{country.name.common} &nbsp;
      <button onClick={() =>handleChosen(country)}>{buttonLabel}</button>
      </li>
    )
  }
  
  export default Country