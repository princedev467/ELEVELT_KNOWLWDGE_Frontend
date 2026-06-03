// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const blogLikesApi = createApi({
  reducerPath: 'blogLikesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getblogLikes: builder.query({
      query: () => 'blogLikes/getAllBlogLikes',
      providesTags: ['blogLikes']
    }),
    addblogLikes: builder.mutation({
      query: (data) => ({
        url: 'blogLikes/addBlogLikes',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['blogLikes']    
    }),
    updateblogLikes: builder.mutation({
      query: (data) => ({
        url: `blogLikes/updateBlogLikes/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['blogLikes']
    }),
    deleteblogLikes: builder.mutation({
      query: (id) => ({
        url: `blogLikes/deleteBlogLikes/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['blogLikes']
    }),
  })
})


export const {useGetblogLikesQuery,useAddblogLikesMutation,useUpdateblogLikesMutation,useDeleteblogLikesMutation} = blogLikesApi