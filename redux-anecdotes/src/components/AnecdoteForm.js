import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
   

const addNewAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.addNotification(`You added a new anecdote: '${content}'`, 5)
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


export default connect(
    null,
    { createAnecdote, addNotification }
)(AnecdoteForm)