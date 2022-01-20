import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProduct';

export interface Favorites {
  value: {
    ids: Record<string, boolean>;
    products: IProduct[];
  };
}
const initialState: Favorites = {
  value: {
    ids: {},
    products: [],
  },
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.value.ids[action.payload.id] = true;
      state.value.products.push(action.payload);
    },
    removeFavorite: (state, action) => {
      const id = action.payload.id;
      state.value.ids[id] = false;
      state.value.products = state.value.products.filter(p => p.id !== id);
    },
    resetFavorites: state => {
      state.value = { ids: {}, products: [] };
    },
  },
});

export const { addFavorite, removeFavorite, resetFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
