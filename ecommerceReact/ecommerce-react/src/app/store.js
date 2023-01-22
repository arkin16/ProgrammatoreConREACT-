import { configureStore } from "@reduxjs/toolkit";
import sign_in_upSlice from "../feature/sign_in-up/sign_in_upSlice";

export const store = configureStore({
  reducer: {
    sign_in_up: sign_in_upSlice,
  },
});
