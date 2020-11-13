const initialState = [
     { notification: "",
    visible: false }
]

export const addNotification = (content, time) => {
    return async dispatch => {
        dispatch({
            type: 'NEW_NOTIFICATION',
            data: { content }
        })
        setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIFICATION'
            })}, time * 1000)
    }
}

export const removeNotification = () => {
    return({
        type: 'REMOVE_NOTIFICATION'
    })
}
 
const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_NOTIFICATION':
            const content = action.data.content
            state = { notification: content,
            visible: true }
            return state
        case 'REMOVE_NOTIFICATION':
            state = { notification: "",
            visible: false }
            return state
        default:
            return state
    }

}
export default notificationReducer