// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => 'cart/getAllcart',
      providesTags: ['cart']
    }),
    addCart: builder.mutation({
      query: (data) => ({
        url: 'cart/addcart',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['cart']    
    }),
    updateCart: builder.mutation({
      query: (data) => ({
        url: `cart/updatecart/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['cart']
    }),
    deleteCart: builder.mutation({
      query: (id1,id2) => ({
        url: `cart/deletecart/${id1}/${id2}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['cart']
    }),
 
  })
})


export const {useGetCartQuery,useAddCartMutation,useUpdateCartMutation,useDeleteCartMutation} = cartApi