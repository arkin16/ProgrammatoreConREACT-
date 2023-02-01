import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodosReducer from "../features/todos/todosSlice";
import UserLoginReducer from "../features/userLogin/userLoginSlice";
import storage from "redux-persist/lib/storage"; //localstorage
//import storageSession from 'redux-persist/lib/storageSession' //sessionStorage
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_CODE_KEY,
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const rootReducer = combineReducers({
  userLogin: UserLoginReducer,
  todos: TodosReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  /* reducer: {
    userLogin: UserLoginReducer, 
    todos: TodosReducer
  }, */
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
