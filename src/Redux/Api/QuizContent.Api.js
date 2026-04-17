// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const quizContentApi = createApi({
  reducerPath: 'quizContentApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getquizContent: builder.query({
      query: () => 'quiz_content/getAllquizContent',
      providesTags: ['quiz_content']
    }),
    addquizContent: builder.mutation({
      query: (data) => ({
        url: 'quiz_content/addquizContent',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['quiz_content']    
    }),
    updatequizContent: builder.mutation({
      query: (data) => ({
        url: `quiz_content/updatequizContent/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['quiz_content']
    }),
    deletequizContent: builder.mutation({
      query: (id) => ({
        url: `quiz_content/deletequizContent/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['quiz_content']
    }),
   
  })
})


export const {useGetquizContentQuery,useAddquizContentMutation,useUpdatequizContentMutation,useDeletequizContentMutation} = quizContentApi