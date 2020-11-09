import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
//import reducer from './reducers/anecdoteReducer'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools())

console.log(store.getState())
export default store