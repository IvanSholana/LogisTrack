import { createSlice } from "@reduxjs/toolkit";
import peminjamanList from "../data/local/PeminjamanData";

const initialState = {
  dataPeminjaman: peminjamanList,
};

export const peminjamanSlice = createSlice({
  name: "peminjaman",
  initialState: initialState,
  reducers: {
    setPeminjaman: (state, action) => {
      state.dataPeminjaman = action.payload.peminjaman;
    },
  },
});

export const { setPeminjaman } = peminjamanSlice.actions;

export default peminjamanSlice.reducer;