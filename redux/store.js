import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import peminjamanReducer from "./peminjamanSlice";
import peralatanReducer from "./alatSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    peminjaman: peminjamanReducer,
    peralatan: peralatanReducer,
  },
});

export default store;
