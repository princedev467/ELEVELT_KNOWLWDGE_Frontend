// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getquiz: builder.query({
      query: () => 'quiz/getAllquiz',
      providesTags: ['quiz']
    }),
    addquiz: builder.mutation({
      query: (data) => ({
        url: 'quiz/addquiz',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['quiz']    
    }),
    updatequiz: builder.mutation({
      query: (data) => ({
        url: `quiz/updatequiz/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['quiz']
    }),
    deletequiz: builder.mutation({
      query: (id) => ({
        url: `quiz/deletequiz/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['quiz']
    }),
   
  })
})


export const {useGetquizQuery,useAddquizMutation,useUpdatequizMutation,useDeletequizMutation} = quizApi