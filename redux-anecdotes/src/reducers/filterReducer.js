const initialstate = [
    ''
]

export const filterChange = (filter) => {
    //console.log(filter)
    return{
        type: 'SET_FILTER',
        data: { filter }
    }
}

const filterReducer = (state = initialstate, action) => {
    switch(action.type) {
        case 'SET_FILTER':
            //console.log("setFilter", action.data.filter)
            state = action.data.filter
            return state
        default:
            return state

    }
}

export default filterReducer