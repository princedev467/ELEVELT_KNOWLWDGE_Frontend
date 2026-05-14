// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const PaymentApi = createApi({
  reducerPath: 'PaymentApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  tagTypes:['payment'],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: 'payment/createorder',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['payment']    
    })
  })
})


export const {useCreateOrderMutation,useVerifyPaymentMutation} = PaymentApi;