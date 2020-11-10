import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addNotificationNewAnecdote, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()


const addNewAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(addNotificationNewAnecdote(content))
        setTimeout(() => {
        dispatch(removeNotification())
        }, 5000);
}

return(
    <div>
        <h2>create new</h2>
        <form onSubmit={addNewAnecdote} >
            <div><input name="anecdote"/></div>
            <button type="submit">create</button>
        </form>
    </div>
)
}

export default AnecdoteForm