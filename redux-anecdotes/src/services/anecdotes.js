import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getId = () => (100000 * Math.random()).toFixed(0)

const createNew = async (content) => {
    const newObject = { content, votes: 0, id: getId() }
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

const modifyVotes = async anecdoteToModify => {
    const response = await axios.put(`${baseUrl}/${anecdoteToModify.id}`, anecdoteToModify)
    return response.data
}

export default { getAll, createNew, modifyVotes }