import config from './apiConfig';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IProduct} from '../interfaces/IProduct';
import {toQueryString} from '../interfaces/IDBModel';
import {ICondition} from '../interfaces/ICondition';
import {IDesigner} from '../interfaces/IDesigner';
import {ICategory} from '../interfaces/ICategory';
import {IColor} from '../interfaces/IColor';
import {ICredentials} from '../interfaces/ICredentials';
import {IUser} from '../interfaces/IUser';
import {IFavorite} from '../interfaces/IFavorite';

export const api = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    prepareHeaders: headers => {
      headers.set('Authorization', 'Bearer test-token');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
    mode: 'cors',
  }),
  tagTypes: ['Favorites'],
  endpoints: builder => ({
    getProducts: builder.query<IProduct[], IProduct>({
      query: (query: IProduct = {}) => {
        const qstring = toQueryString(query);
        return `/products${qstring ? qstring : ''}`;
      },
    }),
    getProduct: builder.query<IProduct, string>({
      query: productId => `/products/${productId ? productId : '0'}`,
    }),
    getConditions: builder.query<ICondition[], null>({
      query: () => '/conditions',
    }),
    getCondition: builder.query<ICondition, string>({
      query: conditionId => `/conditions/${conditionId ? conditionId : '0'}`,
    }),
    getDesigners: builder.query<IDesigner[], null>({
      query: () => '/designers',
    }),
    getCategories: builder.query<ICategory[], null>({
      query: () => '/categories',
    }),
    getColors: builder.query<IColor[], null>({
      query: () => '/colors',
    }),
    getUser: builder.query<IUser[], ICredentials>({
      query: (credentials: ICredentials) => {
        const {email, password: pw} = credentials;
        return `/users?email=${email}&password=${pw}`;
      },
    }),
    getFavorites: builder.query<IFavorite[], string>({
      query: (userId: string) => {
        return `/favorites?userId=${userId}`;
      },
      providesTags: result => [{type: 'Favorites', id: 'LIST'}],
    }),
    createFavorite: builder.mutation<IFavorite, IFavorite>({
      query: (body: IFavorite) => ({
        url: '/favorites',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Favorites', id: 'LIST'}],
    }),
    destroyFavorite: builder.mutation<{}, string>({
      query: (favoriteId: string) => ({
        url: `/favorites/${favoriteId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{type: 'Favorites', id: 'LIST'}],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetConditionsQuery,
  useGetConditionQuery,
  useGetDesignersQuery,
  useGetCategoriesQuery,
  useGetColorsQuery,
  useGetUserQuery,
  useGetFavoritesQuery,
  useCreateFavoriteMutation,
  useDestroyFavoriteMutation,
} = api;
