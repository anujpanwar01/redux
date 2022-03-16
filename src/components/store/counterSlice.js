import { createSlice } from "@reduxjs/toolkit";

//alternate of reducer function
const initial = {
  counter: 0,
  showCounter: true,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initial,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
