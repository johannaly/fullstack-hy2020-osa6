const initialState = [
     { notification: "",
    visible: false }
]

let timeOutId = 0

export const addNotification = (content, time) => {
    
    return async dispatch => {
        dispatch({
            type: 'NEW_NOTIFICATION',
            data: { content }
        })
        clearTimeout(timeOutId)
        timeOutId = setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIFICATION'
            })}, time * 1000)
    }
}

export const removeNotification = (id) => {
    return({
        type: 'REMOVE_NOTIFICATION',
        id
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