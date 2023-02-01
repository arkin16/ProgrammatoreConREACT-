import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    user: {},
    isLoggedIn: false,
    error: ""
}

export const getUserLogin = createAsyncThunk("user/getuserLogin", (obj) => {
    return axios.post(process.env.REACT_APP_URL_API + 'login/', obj).then((response) => {
        if(response.status !== 200) throw Error(response.statusText)
        return response.data
    }).catch((error) => {throw Error(error.message)})
})

export const userLogin_slice = createSlice(
    {
    name: "userLogin",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getUserLogin.rejected]: (state, action) => {
            state.error = action.error.message},
        [getUserLogin.fulfilled]:(state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
        },
    }
    }
);

export default userLogin_slice.reducer;