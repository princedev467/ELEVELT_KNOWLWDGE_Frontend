// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const enrollmentApi = createApi({
  reducerPath: 'enrollmentApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    getEnrollment: builder.query({
      query: () => 'enrollment/getAllEnroll',
      providesTags: ['enrollment']
    }),
  
  })
})


export const {useGetEnrollmentQuery} = enrollmentApi;