// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const blogSectionApi = createApi({
  reducerPath: 'blogSectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getBlogSection: builder.query({
      query: () => 'blogSection/getAllblogSection',
      providesTags: ['blogSection']
    }),
     addBlogSection: builder.mutation({
      query: (data) => ({
        url: 'blogSection/addblogSection',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['blogSection']    
    }),
    updateBlogSection: builder.mutation({
      query: (data) => ({
        url: `blogSection/updateblogSection/${data.get('_id')}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['blogSection']
    }),
    deleteBlogSection: builder.mutation({
      query: (id) => ({
        url: `blogSection/deleteblogSection/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['blogSection']
    }),
  })
})


export const {useGetBlogSectionQuery,useAddBlogSectionMutation,useUpdateBlogSectionMutation,useDeleteBlogSectionMutation} = blogSectionApi