// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const CheckoutApi = createApi({
  reducerPath: 'CheckoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  tagTypes:['checkout'],
  endpoints: (builder) => ({
    getCheckout: builder.query({
      query: () => 'checkout/getAllCheckout',
      providesTags: ['checkout']
    }),
    addCheckout: builder.mutation({
      query: (data) => ({
        url: 'checkout/addCheckout',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['checkout']    
    }),
  })
})


export const {useGetCheckoutQuery,useAddCheckoutMutation} = CheckoutApi;