import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = newObject => {
    return axios.post(baseUrl, newObject).then(response => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}

const delete_contact = contact_id => {
    return axios.delete(`${baseUrl}/${contact_id}`)
}

export default {getAll, create, update, delete_contact}