import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: "",
  jumlah: "",
  deskripsi: "",
  gambar: "",
};

export const alatSlice = createSlice({
  name: "Peralatan",
  initialState: initialState,
  reducers: {
    setAlat: (state, action) => {
      state.nama = action.payload.nama;
      state.jumlah = action.payload.jumlah;
      state.deskripsi = action.payload.deskripsi;
      state.gambar = action.payload.gambar;
    },
    clearAlat: (state) => {
      state.nama = "";
      state.jumlah = "";
      state.deskripsi = "";
      state.gambar = "";
    },
  },
});

export const { setAlat, clearAlat } = alatSlice.actions;

export default alatSlice.reducer;
