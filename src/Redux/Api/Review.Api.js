// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const ReviewApi = createApi({
  reducerPath: 'ReviewApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getReview: builder.query({
      query: () => 'review/getAllReview',
      providesTags: ['review']
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: 'review/addReview',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['review']    
    }),
    updateReview: builder.mutation({
      query: (data) => ({
        url: `review/updateReview/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['review']
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `review/deleteReview/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['review']
    }),
  })
})


export const {useGetReviewQuery,useAddReviewMutation,useUpdateReviewMutation,useDeleteReviewMutation} = ReviewApi