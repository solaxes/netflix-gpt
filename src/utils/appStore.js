import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./redux-slices/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
