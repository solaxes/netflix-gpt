import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./redux-slices/userSlice";
import moviesReducer from "./redux-slices/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
