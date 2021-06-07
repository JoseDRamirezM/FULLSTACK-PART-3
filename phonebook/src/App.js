import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import './App.css'; 


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationState, setNotificationState] = useState(true)
  const [message, setMessage] = useState(null)
  
  const hook = () => {
    personService
      .getAll()
      .then(contacts => { 
        setPersons(contacts)
      })
  }

  useEffect(hook, [])

  const handleNewName = event => setNewName(event.target.value)

  const handleNewNumber = event => setNewNumber(event.target.value)

  const handleNewFilter = event => setFilter(event.target.value)

  const define_message = (text, style) => {
    setNotificationState(style)
    setMessage(text)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const deleteHandler = (id, name) => {
    if(window.confirm(`Delete ${name} ?`)) {
    personService
      .delete_contact(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
        define_message(`${name} deleted`, true)
      })
      .catch(error => {
        define_message(`'${name}' was already deleted from server`, false)
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }
   
  const addNewPerson = (event) => {
    event.preventDefault()
    if (newName && newNumber) {
      if (persons.filter(person => person.name === newName).length > 0) {
        const contact = persons.filter(person => person.name === newName).pop()
        if (contact.number !== newNumber) {
          if (window.confirm(`${contact.name} is already addded to phonebook, replace the old number with a new one?`)){
            personService
              .update(contact.id, {...contact, number: newNumber})
              .then(returnedPerson => {
                setPersons(persons.map(person => person.id !== contact.id ? person : returnedPerson))
                setNewName('')
                setNewNumber('')
                define_message(`Updated ${contact.name}`, true)
              })
              .catch(error => {
                define_message(`'${contact.name}' was already deleted from server`, false)
                setPersons(persons.filter(person => person.id !== contact.id))
              })
          }
        } else {
          
          define_message(`${newName} is already added to the phonebook`, false)
        }
      } else {
        const newPersonObject = {name: newName, number: newNumber}
        personService
          .create(newPersonObject)
          .then(newContact => {
            setPersons(persons.concat(newContact))
            setNewName('')
            setNewNumber('')
            define_message(`Contact ${newPersonObject.name} created!`, true)
          })
          .catch(error => {
            define_message(error.response.data, false)
          })
      }
    } else {
      define_message(`Can't add an empty contact!`, false)
    }
  }

  const constactsToShow = filter
    ? persons.filter( person =>
                     person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) 
    : persons


  return (
    <div>
      <div className="header">
        <h2>Phonebook</h2>
      </div>
      <div className="page">
          
        <h2>add a new</h2>
          <PersonForm addNewPerson={addNewPerson} newName={newName}
                      handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />  
      </div>
      
      <div className="filter">
        <Notification message={message} style={notificationState} />
        <h2>Numbers</h2>
        <Filter filter={filter} handler={handleNewFilter} />
      </div>
      <div className="grid"> 
        {constactsToShow.map( person => 
            <Persons key={person.name} person={person} deleteHandler={() => deleteHandler(person.id, person.name)}/>
        )}
      </div>
      
    </div>
  )
}

export default App;
