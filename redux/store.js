import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import alatReducer from "./alatSlice";
import ruanganReducer from "./ruanganSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    alat: alatReducer,
    ruangan: ruanganReducer,
  },
});

export default store;
