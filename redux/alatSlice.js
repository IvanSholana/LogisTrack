import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peralatanList: [],
  ruanganList: [],
};

const alatSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    deleteItem: (state, action) => {
      state.peralatanList = state.peralatanList.filter(item => item.id !== action.payload);},
  },
});

export const { deleteItem } = alatSlice.actions;
export default alatSlice.reducer;
