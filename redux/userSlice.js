import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: "",
  status: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.nama = action.payload.nama;
      state.status = action.payload.status;
    },
    clearUser: (state) => {
      state.nama = "";
      state.status = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
