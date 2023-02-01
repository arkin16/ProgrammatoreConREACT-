import { autoBatchEnhancer, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userlist: [
            {id:1, name: 'John', lastName: 'Doe', city: 'San Francisco'}, 
            {id:2, name: 'Mason', lastName: 'Smith', city:'Chicago'}
        ]
}

export const usersSlice = createSlice(
    {
        name: 'users',
        initialState: initialState,
        reducers: {
            removeUser(state, action){
                state.userlist = state.userlist.filter(user => user.id !== action.payload.id)
            },
            addUser(state, action) {
                //state.userlist.push(action.payload)
                state.userlist = [...state.userlist, action.payload]
            }
        },
        extraReducers: {}
    }
)

/* console.log(usersSlice); */
const { actions, reducer } = usersSlice;
export const { removeUser, addUser } = actions;
export default reducer