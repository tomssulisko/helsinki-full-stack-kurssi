const Country = ({ country, buttonLabel, handleInfo }) => {
    return (
      <li key={country.cca2} >{country.name.common} &nbsp;
      </li>
    )
  }
  
  export default Country