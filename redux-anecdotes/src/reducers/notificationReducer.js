const initialState = [
     { notification: "",
    visible: false }
]

export const addNotification = (content) => {
    return({
        type: 'NEW_VOTE',
        data: { content }
    })
}

export const addNotificationNewAnecdote = (content) => {
    return({
        type: 'NEW_ANECDOTE_ADD',
        data: { content }
    })
}

export const removeNotification = () => {
    return({
        type: 'REMOVE_NOTIFICATION'
    })
}
 
const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_VOTE':
            const content = action.data.content
            state = { notification: `You voted '${content.content}'`,
            visible: true }
            return state
        case 'REMOVE_NOTIFICATION':
            state = { notification: "",
            visible: false }
            return state
        case 'NEW_ANECDOTE_ADD':
            //console.log(action.data)
            state = { notification: `You added '${action.data.content}'`,
            visible: true }
            return state
        default:
            return state
    }

}
export default notificationReducer