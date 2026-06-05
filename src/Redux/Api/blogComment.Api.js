// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const blogCommentApi = createApi({
  reducerPath: 'blogCommentApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getBlogComment: builder.query({
      query: () => 'blogComment/getAllBlogComment',
      providesTags: ['blogComment']
    }),
    addBlogComment: builder.mutation({
      query: (data) => ({
        url: 'blogComment/addBlogComment',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['blogComment']    
    }),
    updateBlogComment: builder.mutation({
      query: (data) => ({
        url: `blogComment/updateBlogComment/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['blogComment']
    }),
    deleteBlogComment: builder.mutation({
      query: (id) => ({
        url: `blogComment/deleteBlogComment/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['blogComment']
    }),
  })
})


export const {useGetBlogCommentQuery,useAddBlogCommentMutation,useUpdateBlogCommentMutation,useDeleteBlogCommentMutation} = blogCommentApi