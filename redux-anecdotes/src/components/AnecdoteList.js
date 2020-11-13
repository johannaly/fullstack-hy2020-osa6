import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { addNotification } from '../reducers/notificationReducer'
import Filter from '../components/Filter'


const Anecdote = ({ anecdote, handleClick }) => {
    return (
    <div>
        <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    </div>
    )
}


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdote)
    const filter = useSelector(state => state.filter)
    const filteredAnecdotes = anecdotes.filter(a => a.content.toLowerCase().includes(filter))

    return(
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            <div>
            {filteredAnecdotes
            .sort((a, b) => b.votes - a.votes)
            .map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        dispatch(addVote(anecdote))
                        dispatch(addNotification(`You voted '${anecdote.content}'`, 5))
                       
                    }
                    }
                />
            )}
            </div>
        </div>
    )
}

export default AnecdoteList