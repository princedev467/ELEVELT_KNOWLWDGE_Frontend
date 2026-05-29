// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => 'blog/getAllblog',
      providesTags: ['whistlist']
    }),
    addBlog: builder.mutation({
      query: (data) => ({
        url: 'blog/addblog',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['whistlist']    
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `blog/updateblog/${data.get('_id')}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['whistlist']
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blog/deleteblog/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['whistlist']
    }),
  })
})


export const {useGetBlogQuery,useAddBlogMutation,useUpdateBlogMutation,useDeleteBlogMutation} = blogApi