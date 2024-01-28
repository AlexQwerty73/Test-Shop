import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3001/';
const typeTag = 'Products';
const resource = 'products';

export const productsApi = createApi({
   reducerPath: 'productsApi',
   tagTypes: [typeTag],
   baseQuery: fetchBaseQuery({ baseUrl }),

   endpoints: (builder) => ({
      getProducts: builder.query({
         query: (id = '') => `${resource}${id ? `/${id}` : ''}`,
         providesTags: (result) => [
            ...(result || []).map(({ id }) => ({ type: typeTag, id })),
            { type: typeTag, id: 'LIST' },
         ],
      }),

      addProducts: builder.mutation({
         query: (body) => ({
            url: resource,
            method: 'POST',
            body,
         }),
         invalidatesTags: [{ type: typeTag, id: 'LIST' }],
      }),

      updateProducts: builder.mutation({
         query: (body) => ({
            url: `${resource}/${body.id}`,
            method: 'PUT',
            body,
         }),
         invalidatesTags: [{ type: typeTag, id: 'LIST' }],
      }),
   }),
});

export const { useAddProductsMutation, useGetProductsQuery, useUpdateProductsMutation } = productsApi;
