import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { addNotification, removeNotification } from '../reducers/notificationReducer'

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

    return(
        <div>
            <h2>Anecdotes</h2>
            <div>
            {anecdotes
            .sort((a, b) => b.votes - a.votes)
            .map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        dispatch(addVote(anecdote.id))
                        dispatch(addNotification(anecdote))
                        setTimeout(() => {
                            dispatch(removeNotification())
                        }, 5000);
                    }
                    }
                />
            )}
            </div>
        </div>
    )
}

export default AnecdoteList