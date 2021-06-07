import React from 'react'

const Persons = ({person, deleteHandler}) => { 
  return (
    <div className="card">
      <div className="photo"></div>
      <div className="banner"></div>
      <ul>
      <li key={person.name}><b>{person.name}</b> <br/>{person.number}</li>
      </ul>
      <button className="contact" id="main-button" onClick={deleteHandler}>Delete</button>
    </div>
  )
}
export default Persons