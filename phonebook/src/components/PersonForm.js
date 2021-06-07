import React from 'react'

const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addNewPerson}>
                <table className="form">
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input value={props.newName} onChange={props.handleNewName} className="input" /></td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td><input type="text" pattern="\d*-*" value={props.newNumber} onChange={props.handleNewNumber} className="input" /></td>
                    </tr>
                    </tbody>
           
                </table>
            <div className="space"><button type="submit" className="button">add</button></div>
            </form>
        </div>
    )
}
export default PersonForm