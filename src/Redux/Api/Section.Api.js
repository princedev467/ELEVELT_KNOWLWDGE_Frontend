// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const sectionApi = createApi({
  reducerPath: 'sectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSection: builder.query({
      query: () => 'section/getAllSection',
      providesTags: ['section']
    }),
    addSection: builder.mutation({
      query: (data) => ({
        url: 'section/addSection',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['section']    
    }),
    updateSection: builder.mutation({
      query: (data) => ({
        url: `section/updateSection/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['section']
    }),
    deleteSection: builder.mutation({
      query: (id) => ({
        url: `section/deleteSection/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['section']
    }),
    // ActiveCourse: builder.mutation({
    //   query: (data) => ({
    //     url: `section/activeCourses/${data._id}`,
    //     method: 'PUT',
    //     body: data
    //   }),
    //   // invalidatesTags:['course']
    // }),

  })
})


export const {useGetSectionQuery,useAddSectionMutation,useUpdateSectionMutation,useDeleteSectionMutation} = sectionApi