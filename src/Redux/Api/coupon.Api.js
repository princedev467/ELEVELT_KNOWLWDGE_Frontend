// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const couponApi = createApi({
  reducerPath: 'couponApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getCoupon: builder.query({
      query: () => 'coupon/getAllCoupon',
      providesTags: ['coupon']
    }),
    addCoupon: builder.mutation({
      query: (data) => ({
        url: 'coupon/addCoupon',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['coupon']    
    }),
    updateCoupon: builder.mutation({
      query: (data) => ({
        url: `coupon/updateCoupon/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['coupon']
    }),
    deleteCoupon: builder.mutation({
      query: (id) => ({
        url: `coupon/deleteCoupon/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['coupon']
    }),
  })
})


export const {useGetCouponQuery,useAddCouponMutation,useUpdateCouponMutation,useDeleteCouponMutation} = couponApi;