import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fetchuserSlice from '../features/fetchUsers/fetchUserSlice';
import usersSlice from '../features/users/usersSlice';


//export const ccStrore =  createStore(reducer, initialState)

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice,
    fetchUsers: fetchuserSlice
  },
});
