import { combineReducers } from 'redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'



const rootReducer = combineReducers({
    anecdote: anecdoteReducer,
    notification: notificationReducer
  })
  

export default rootReducer