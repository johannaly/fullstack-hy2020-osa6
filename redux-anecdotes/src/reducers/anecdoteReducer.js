

const getId = () => (100000 * Math.random()).toFixed(0)

/*
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}*/




 export const addVote = (id) => {
  return({
    type: 'VOTE',
    data: { id }
  })
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      votes: 0,
      id: getId()
    } 
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return{
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

//const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return state.map(a =>
         a.id !== id ? a : votedAnecdote)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    default:
      return state
  }
}

export default reducer