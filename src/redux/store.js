import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice";
import { todoApi } from "./services/api";

export const store = configureStore({
  reducer: {
    // counter : counterReducer,
    [todoApi.reducerPath]: todoApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
});
