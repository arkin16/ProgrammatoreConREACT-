
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import sign_in_upSlice from "../feature/sign_in-up/sign_in_upSlice";

const persistConfig = {
  key: "root",
  storage,
}

const reducers = combineReducers({
  sign_in_up: sign_in_upSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer:persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };