// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const WhistlistApi = createApi({
  reducerPath: 'WhistlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getWhistlist: builder.query({
      query: () => 'whistlist/getAllWhistlist',
      providesTags: ['review']
    }),
    addWhistlist: builder.mutation({
      query: (data) => ({
        url: 'whistlist/addWhistlist',
        method: 'POST',
        body: data
      }),
      invalidatesTags:['review']    
    }),
    updateWhistlist: builder.mutation({
      query: (data) => ({
        url: `whistlist/updateWhistlist/${data._id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags:['review']
    }),
    deleteWhistlist: builder.mutation({
      query: (id) => ({
        url: `whistlist/updateWhistlist/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['review']
    }),
  })
})


export const {useGetWhistlistQuery,useAddWhistlistMutation,useUpdateWhistlistMutation,useDeleteWhistlistMutation} = WhistlistApi