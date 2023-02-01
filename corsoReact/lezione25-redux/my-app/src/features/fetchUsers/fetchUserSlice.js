import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    userlist: [],
    loading: false,
    error: ""
}

export const getAllUsers = createAsyncThunk("users/getAllUsers", () => {
        return fetch('http://localhost:3000/users')
                    .then((response) => {
                        return response.json()})
                    .then(json => json)
    }
);

export const removeUser = createAsyncThunk("users/removeUser", (id) => {
    return fetch('http://localhost:3000/users/'+id, {method: 'DELETE'})
                    .then((response) => {
                        return id})
                    .then(json => json)
    }
);

export const addUser = createAsyncThunk("users/addUser", (obj) => {
    return fetch('http://localhost:3000/users/', {
        method: 'POST', 
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    })
    .then((response) => {
        return response.json()})
    .then(json => json)
})

export const fetchuserSlice = createSlice(
    {
        name: 'fetchUsers',
        initialState: initialState,
        reducers: {},
        extraReducers: {
            // getAll
            [getAllUsers.pending]: state => {
                state.loading = true
            },
            [getAllUsers.rejected]: (state, action) => {
                state.loading = false
                state.error = action.error.message
            },
            [getAllUsers.fulfilled]: (state, action) => {
                state.loading = false
                state.userlist = action.payload
            },
            // remove
            [removeUser.rejected]: (state, action) => {
                state.loading = false
                state.error = action.error.message
            },
            [removeUser.fulfilled]: (state, action) => {
                state.userlist = state.userlist.filter(user => user.id !== action.payload)
            },
            // add
            [addUser.rejected]: (state, action) => {
                state.loading = false
                state.error = action.error.message
            },
            [addUser.fulfilled]: (state, action) => {
                state.userlist = [...state.userlist, action.payload]
            },
        }
    }
)

console.log(fetchuserSlice)

export default fetchuserSlice.reducer