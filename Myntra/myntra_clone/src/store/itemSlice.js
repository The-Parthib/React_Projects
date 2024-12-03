import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";


const itemSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const itemsAction = itemSlice.actions;

export default itemSlice;


