const Person = ({ person, buttonLabel, handlePersonRemove }) => {
    return (
      <li key={person.id} >{person.name} {person.number} &nbsp;
      <button onClick={handlePersonRemove}>{buttonLabel}</button>
      </li>
    )
  }
  
  export default Person