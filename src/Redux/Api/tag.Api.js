// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const tagApi = createApi({
  reducerPath: 'tagApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getTag: builder.query({
      query: () => 'tag/getAllTag',
      providesTags: ['tag']
    }),
    addTag: builder.mutation({
      query: (data) => ({
        url: 'tag/addTag',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['tag']    
    }),
    updateTag: builder.mutation({
      query: (data) => ({
        url: `tag/updateTag/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['tag']
    }),
    deleteTag: builder.mutation({
      query: (id) => ({
        url: `tag/deleteTag/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['tag']
    }),
  })
})


export const {useGetTagQuery,useAddTagMutation,useUpdateTagMutation,useDeleteTagMutation} = tagApi