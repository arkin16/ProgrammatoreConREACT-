export const addTodo = (todo) => {
    return { type: 'ADD_TODO', todo: todo }
}

export const removeTodo = (index) => {
    return { type: 'REMOVE_TODO', index: index }
}

export const completeTodo = (index) => {
    return { type: 'COMPLETE_TODO', index: index }
}

// Async Action
export const getTodo = () => {
    return function (dispatch) {
        return fetch('http://localhost:3000/todos')
                    .then(response => response.json())
                    .then(json => {
                        return dispatch({ type: 'TODO_LOADED', payload: json})
                    });
    }
}
