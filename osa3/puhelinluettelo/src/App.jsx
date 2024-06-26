import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import personService from './services/personservice';
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState(null) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPhrase, setFilterPhrase] = useState('')
  const [notification, setNotification] = useState({message: null, type: null})


  useEffect(() => {
    personService.getAll()
        .then(allPersons => {
            setPersons(allPersons);
        })
        .catch(error => {
          showNotification("Error while fetching all persons: "+error, "error")
            console.log("Error while fetching all persons:", error)
        });
}, []);


  const addPerson = (event) => {

    const person = persons.find((person) => person.name === newName)

      if(!person) {

          event.preventDefault()
          const personObject = {
            name: newName,
            number:newNumber
          }

          personService
          .create(personObject)
          .then(addedPerson => {

            setPersons(persons.concat(addedPerson))
            setNewName('')
            setNewNumber('')

            showNotification("Added: "+personObject.name, "success")
            console.log("Added: "+personObject.name, "success")
          }).catch(error => {
            showNotification("Error while adding person: "+error, "error")
            console.log("Error while adding person:", error)
        });

          
            
          } else {
            if (window.confirm(newName+" is already added to phonebook, replace old number with inserted?")) {
              replacePersonNumber(person, newNumber)
            }
          }
        
    
  }

  const replacePersonNumber = (personToChange, newNumber) => {

    const changedPerson = {
      ...personToChange,
      number:newNumber,
    }

      personService
    .update(changedPerson.id, changedPerson)
    .then(returnedPerson => {
      setPersons(persons.map(person => person.id !== personToChange.id ? person : returnedPerson))

      showNotification("Modified: "+changedPerson.name, "success")
    }).catch(error => {
      showNotification("Error while updating person: "+error, "error")
      console.log("Error while updating person:", error)
  });



  }


  const removePerson = (event) => {
    personService
    .remove(event)
    .then(response => {
      
      let clonedPersons = persons.slice(0)
      const personToRemove = clonedPersons.find((person) => person.id === response.id)
      const removedPersonName = personToRemove.name
      const index = clonedPersons.indexOf(personToRemove)
        if (index > -1) {
          clonedPersons.splice(index,1)
          setPersons(clonedPersons)
        }
      showNotification("Removed: "+removedPersonName, "success")

    }).catch(error => {
      showNotification("Error while removing person: "+error, "error")
      console.log("Error while removing person: ", error)
  });


  }

  const handlePersonRemove = (event) => {
    const personToRemove = persons.find((person) => person.id === event)
    if (window.confirm("Delete "+personToRemove.name+"?")) {
    removePerson(event)
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (phrase) => {
    setFilterPhrase(phrase)
  }

  const personsToShow = !filterPhrase
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filterPhrase.toLowerCase()))


  const showNotification = (message, type) => {
    const showTime = 5000;
    setNotification(
      {message, type}
    )
    setTimeout(() => {
      setNotification({message: null, type: null})
    }, showTime)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification message={notification.message} type={notification.type} />

      <Filter phrase={filterPhrase} handleChange={handleFilterChange} />

      <h2>Add a new number</h2>

      <PersonForm addPerson={addPerson} newName ={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>

      <PersonsList personsToShow={personsToShow} handlePersonRemove={handlePersonRemove} buttonLabel="Remove" />

    </div>
  )

}

export default App