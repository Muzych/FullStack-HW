import {React,useState} from "react"
import Filter from '../src/components/Filter'
import PersonForm from '../src/components/PersonForm'
import Persons from '../src/components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const handleSubmit = (event) => {
      event.preventDefault()
      const pBObj = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      if(persons.find(person => person.name === newName)){
        alert(`${newName} already added to the phonebook.`)
        setPersons(persons)
      }
      else{
        setPersons(persons.concat(pBObj))
      }
      setNewName('')
      setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filter} onChangeFilter={handleFilterChange}/>

      <h3>Add a new</h3>

      <PersonForm 
        onSubmit={handleSubmit}
        nameValue={newName}
        onChangeName={handleNameChange}
        numberValue={newNumber}
        onChangeNumber={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App;