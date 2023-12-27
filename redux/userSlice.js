import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nama: "",
  status: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.nama = action.payload.nama;
      state.status = action.payload.status;
      state.username = action.payload.username;
    },
    clearUser: (state) => {
      state.nama = "";
      state.status = "";
      state.username = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
