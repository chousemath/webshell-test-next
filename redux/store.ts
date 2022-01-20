import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { api } from "../apis/apis";
import productFilterReducer from "../redux/reducers/productFilterReducer";
import favoritesReducer from "../redux/reducers/favoritesReducer";
import userReducer from "../redux/reducers/userReducer";
import navReducer from "./reducers/navReducer";

const rootReducer = combineReducers({
  productFilter: productFilterReducer,
  favorites: favoritesReducer,
  user: userReducer,
  nav: navReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
