import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null, // Change to an object or null to represent the current user
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Save the user object
      state.status = action.payload;
    },
    clearUser: (state) => {
      state.user = null; // Clear the user when needed
      state.status = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
