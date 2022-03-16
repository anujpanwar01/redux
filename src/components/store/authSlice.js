//initial State
import { createSlice } from "@reduxjs/toolkit";

////////////////////////////////////////////////////////////////////
const initailAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initailAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
/*}
const reducer = (state = initial, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "increase":
      return {
        ...state,

        counter: state.counter + action.amout,
      };

    case "toggle":
      return {
        ...state,

        showCounter: !state.showCounter,
      };

    case "decrement":
      return {
        ...state,

        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default reducer;
*/
