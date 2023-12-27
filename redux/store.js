import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import alatReducer from "./alatSlice";
import ruanganReducer from "./ruanganSlice"
import peminjamanReducer from "./peminjamanSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    alat: alatReducer,
    ruangan: ruanganReducer,
    peminjaman: peminjamanReducer,
  },
});

export default store;
