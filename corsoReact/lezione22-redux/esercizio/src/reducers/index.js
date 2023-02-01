export function storeReducer(state = {}, action) {
    switch (action.type) {
        case 'REMOVE_CONTACT':
            return [...state.slice(0, action.index,), ...state.slice(action.index+1)]
        case 'ADD_CONTACT':
            return [...state, action.contact]
        default:
            return state;
    }
    
}