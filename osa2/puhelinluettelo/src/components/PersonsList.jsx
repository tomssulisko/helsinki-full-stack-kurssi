import Person from './Person'

const PersonsList = ({personsToShow, buttonLabel, handlePersonRemove} ) => {
  
    return(
  <ul>
          {personsToShow.map(person => 
            <Person key={person.id} person={person} buttonLabel={buttonLabel} handlePersonRemove={() =>handlePersonRemove(person.id)}/>
          )}
        </ul>
  )}

  export default PersonsList