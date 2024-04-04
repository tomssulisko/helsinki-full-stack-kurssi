import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-123456',
      id:'1' 
    },
    { 
      name: 'Ada Lovelace', 
      number: '39-44-5323523', 
      id:'2' },
    { 
      name: 'Dan Abramov', 
      number: '12-43-234345', 
      id:'3'  },
    {
      name: 'Merja Pallas',
      number: '060-453573436',
      id:'4' 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPhrase, setFilterPhrase] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number:newNumber,
      id: persons.length + 1,
    }

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

  const handleFilterChange = (event) => {
    setFilterPhrase(event.target.value)
  }

  const personsToShow = !filterPhrase
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filterPhrase.toLowerCase()))


  return (
    <div>
      <h1>Phonebook</h1>
      <div>
          Search: <input 
            value={filterPhrase} 
            onChange={handleFilterChange}
         />
        </div>
        <h2>Add a new number</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName} 
            onChange={handlePersonChange}
         />
        </div>
        <div>
          number: <input 
            value={newNumber} 
            onChange={handleNumberChange}
         />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form >
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => 
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App