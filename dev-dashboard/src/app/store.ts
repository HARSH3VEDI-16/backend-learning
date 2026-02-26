import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// ✅ Typed state
export type RootState = ReturnType<typeof store.getState>;

// ✅ Typed dispatch
export type AppDispatch = typeof store.dispatch;