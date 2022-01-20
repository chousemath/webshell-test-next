import {createSlice} from '@reduxjs/toolkit';

interface FilterState {
  value: Record<string, string | number | boolean>;
  open: boolean;
}

const initialState: FilterState = {
  value: {},
  open: false,
};

export const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState,
  reducers: {
    toggleFilter: state => {
      state.open = !state.open;
    },
    setFilter: (state, action) => {
      state.value[action.payload.key] = action.payload.value;
    },
    removeFilter: (state, action) => {
      const value = {...state.value};
      delete value[action.payload];
      state.value = value;
    },
  },
});

export const {setFilter, removeFilter, toggleFilter} =
  productFilterSlice.actions;

export default productFilterSlice.reducer;
