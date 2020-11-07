import React from 'react'
import { vote } from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'



const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  //action creator
  const addVote = (id) => {
    dispatch(vote(id))
  }

  /*
  const addNewAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    store.dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        content,
        id: getId()
      } 
    })
  }*/

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form >
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App