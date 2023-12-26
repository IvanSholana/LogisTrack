import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: "",
  status: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.nama = action.payload.nama;
      state.status = action.payload.status;
    },
    clearUser: (state) => {
      state.nama = "";
      state.status = "";
      state.nim = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
