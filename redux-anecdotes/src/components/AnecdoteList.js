import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { addNotification } from '../reducers/notificationReducer'
import Filter from '../components/Filter'
import { connect } from 'react-redux'


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


const AnecdoteList = (props) => {
    return(
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            <div>
            {props.anecdotes
            .sort((a, b) => b.votes - a.votes)
            .map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={() => {
                        props.addVote(anecdote)
                        props.addNotification(`You voted '${anecdote.content}'`, 5) 
                    }
                    }
                />
            )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    if(state.filter === undefined) {
        return{
            anecdotes: state.anecdotes
        }
    } 
    return{
        anecdotes: state.anecdote.filter(a => a.content.toLowerCase().includes(state.filter))
    }
}



const mapDispatchToProps = {
    addVote, addNotification
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)