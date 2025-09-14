// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import pollReducer from "../features/pollSlice";

export const store = configureStore({
  reducer: {
    polls: pollReducer,
  },
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
