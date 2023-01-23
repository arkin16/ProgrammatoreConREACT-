import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  statusRegister: "",
  loading: false,
  islogin: false,
  userlog: null,
  error: "",
};

export const registerUser = createAsyncThunk(
  "registerS/registerStatus",
  (obj) => {
    return axios
      .post("http://localhost:3000/register", obj)
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.statusText;
      })
      .catch((error) => {
        throw Error(error.message);
      });
  }
);

export const loginUser = createAsyncThunk("login/loginUser", (obj) => {
  return axios
    .post("http://localhost:3000/login", obj)
    .then((response) => {
      if (response.status !== 200) {
        throw Error(response.statusText);
      }
      return response.data;
    })
    .catch((error) => {
      throw Error(error.message);
    });
});

const sign_in_upSlice = createSlice({
  name: "sign_in_up",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.statusRegister = action.statusText;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.islogin = true;
      state.userlog = action.payload;
    },
  },
});

export default sign_in_upSlice.reducer;
