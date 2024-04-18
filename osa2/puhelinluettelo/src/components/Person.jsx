const Person = ({ person, buttonLabel, handlePersonRemove }) => {
    return (
      <li>{person.name} {person.number} &nbsp;
      <button onClick={handlePersonRemove}>{buttonLabel}</button>
      </li>
    )
  }
  
  export default Person