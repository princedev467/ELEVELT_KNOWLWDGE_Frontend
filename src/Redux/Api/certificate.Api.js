// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const certificateApi = createApi({
  reducerPath: 'certificateApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
  endpoints: (builder) => ({
    addcertificate: builder.mutation({
      query: (data) => ({
        url: 'certificate/createCertificate',
        method: 'POST',
        body:  data,
      }),
      invalidatesTags:['certificate']    
    }),

   
  })
})


export const {useAddcertificateMutation} = certificateApi