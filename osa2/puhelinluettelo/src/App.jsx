import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import personService from './services/personservice';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPhrase, setFilterPhrase] = useState('')


  useEffect(() => {
    personService.getAll()
        .then(allPersons => {
            setPersons(allPersons);
        })
        .catch(error => {
            console.log("Error while fetching all persons:", error)
        });
}, []);


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number:newNumber,
      id: persons.length + 1,
    }

    personService
    .create(personObject)
    .then(response => {
      console.log(response)
    })


    let nameIsAlreadyAdded = persons.find((person) => person.name === newName)

    if(!nameIsAlreadyAdded) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(newName+" is already added to phonebook")
    }
  
    
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (phrase) => {
    console.log("Changing filterphrase to: ",phrase)
    setFilterPhrase(phrase)
  }

  const personsToShow = !filterPhrase
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filterPhrase.toLowerCase()))


  return (
    <div>
      <h1>Phonebook</h1>

      <Filter phrase={filterPhrase} handleChange={handleFilterChange} />

      <h2>Add a new number</h2>

      <PersonForm addPerson={addPerson} newName ={newName} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>

      <PersonsList personsToShow={personsToShow} />

    </div>
  )

}

export default App