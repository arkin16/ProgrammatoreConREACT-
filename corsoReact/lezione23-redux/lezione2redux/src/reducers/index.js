export function storeReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo]
        case 'REMOVE_TODO':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'COMPLETE_TODO':
            let prevState = [...state];
            prevState[action.index].completed = prevState[action.index].completed === 'completed' ? '' : 'completed';
            return prevState;
        case 'TODO_LOADED':
            /* console.log('TODO_LOADED');
            console.log(action.payload); */
            return [...action.payload]
        default:
            return state
    }
}