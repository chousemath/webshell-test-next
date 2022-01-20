import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/IUser';

interface UserState {
  value: IUser;
}

const initialState: UserState = {
  value: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleSignin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { handleSignin } = userSlice.actions;

export default userSlice.reducer;
