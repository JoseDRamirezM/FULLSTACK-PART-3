import React from 'react'

const Filter = ({filter, handler}) => {
    return (
        <div><input value={filter} onChange={handler} placeholder="Search contacts.." className="search_bar" /></div>
    )
}
export default Filter