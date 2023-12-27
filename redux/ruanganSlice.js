import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: "",
  jumlah: "",
  deskripsi: "",
  gambar: "",
};

export const ruanganSlice = createSlice({
  name: "Peralatan",
  initialState: initialState,
  reducers: {
    setRuangan: (state, action) => {
      state.nama = action.payload.nama;
      state.jumlah = action.payload.jumlah;
      state.deskripsi = action.payload.deskripsi;
      state.gambar = action.payload.gambar;
    },
    clearRuangan: (state) => {
      state.nama = "";
      state.jumlah = "";
      state.deskripsi = "";
      state.gambar = "";
    },
  },
});

export const { setRuangan, clearRuangan } = ruanganSlice.actions;

export default ruanganSlice.reducer;
