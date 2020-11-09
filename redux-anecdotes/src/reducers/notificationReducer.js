const initialState = [
     'warning'
    
]


const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WARNING':
            return state
        default:
            return state
    }

}
export default notificationReducer