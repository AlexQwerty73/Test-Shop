import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3001/';

const typeTag = 'Cart'; 
const src = 'cart';

export const usersApi = createApi({
   reducerPath: 'cartApi',
   tagTypes: [typeTag],
   baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

   endpoints: (build) => ({

      getCart: build.query({
         query: () => src,
         providesTags: (result) =>
            result && Array.isArray(result)
               ? [
                  ...result.map(({ id }) => ({ type: typeTag, id })),
                  { type: typeTag, id: 'LIST' },
               ]
               : [{ type: typeTag, id: 'LIST' }],
      })

   }),
});

export const {useGetCartQuery} = usersApi;
