import { createSlice } from "@reduxjs/toolkit";
import peralatanList from "../data/local/PeralatanData";

const initialState = {
  peralatan: peralatanList,
};

export const peralatanSlice = createSlice({
  name: "peralatan",
  initialState: initialState,
  reducers: {
    setPeralatan: (state, action) => {
      state.peralatan = action.payload;
    },
  },
});

export const { setPeralatan } = peralatanSlice.actions;

export default peralatanSlice.reducer;
