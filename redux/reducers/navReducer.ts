import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  route: string;
}
const initialState: InitialState = {
  route: "/",
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    handleRouting: (state, action) => {
      state.route = action.payload;
    },
  },
});

export const { handleRouting } = navSlice.actions;

export default navSlice.reducer;
