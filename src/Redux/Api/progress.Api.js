// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const progressApi = createApi({
  reducerPath: 'progressApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getProgress: builder.query({
      query: () => 'progress/getAllProgress',
      providesTags: ['progress']
    }),
    addProgress: builder.mutation({
      query: (data) => ({
        url: 'progress/addProgress',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['progress']    
    }),
    updateProgress: builder.mutation({
      query: (data) => ({
        url: `progress/updateProgress/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['progress']
    }),
    deleteProgress: builder.mutation({
      query: (id) => ({
        url: `progress/deleteProgress/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['progress']
    }),
  })
})


export const {useGetProgressQuery,useAddProgressMutation,useUpdateProgressMutation,useDeleteProgressMutation} = progressApi;