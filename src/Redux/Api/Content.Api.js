// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const contentApi = createApi({
  reducerPath: 'contentApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getcontent: builder.query({
      query: () => 'content/getAllContent',
      providesTags: ['content']
    }),
    addcontent: builder.mutation({
      query: (data) => ({
        url: 'content/addContent',
        method: 'POST',
        body:  data,
      }),
      invalidatesTags:['content']    
    }),
    updatecontent: builder.mutation({
      query: (data) => ({
        url: `content/updateContent/${data._id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags:['content']
    }),
    deletecontent: builder.mutation({
      query: (id) => ({
        url: `content/deleteContent/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['content']
    }),
   
  })
})


export const {useGetcontentQuery,useAddcontentMutation,useUpdatecontentMutation,useDeletecontentMutation} = contentApi