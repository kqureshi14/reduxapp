import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers"; // Assuming this is your root reducer
import { thunk } from "redux-thunk"; // Import thunk without curly braces

// Configure the store with reducers and apply the middleware
export const store = configureStore({
  reducer: reducers, // Combine your reducers here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk to the middleware
});
