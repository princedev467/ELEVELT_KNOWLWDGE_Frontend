// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utility/url'

// Define a service using a base URL and expected endpoints
export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCourse: builder.query({
      query: () => 'course/getAllCourse',
      // providesTags: ['course']
    }),
    addCourse: builder.mutation({
      query: (data) => ({
        url: 'course/addCourse',
        method: 'POST',
        body: data
      }),
      // invalidatesTags:['course']
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        console.log("data", data);
        let temp_id = crypto.randomUUID()

        const ImageData = data.getAll('course_img');

        const patchResult = dispatch(

          courseApi.util.updateQueryData('getCourse', undefined, (draft) => {
            console.log("draft.data", draft.data)
            draft.data.push({
              _id: temp_id,
              name: data.get('name'),
              description: data.get('description'),
              category_id: data.get('category_id'),
              price: data.get('price'),
              week: data.get('week'),
              course_img: ImageData?.map(v => ({
                url: URL.createObjectURL(v)
              })),
              // Preview_url: data.get('Preview_url')

            })

          }),
        )
        try {
          const { data } = await queryFulfilled
          console.log("data", data);

          dispatch(
            courseApi.util.updateQueryData('getCourse', undefined, (draft) => {
              console.log("draft.data", draft.data)

              let index = draft.data.findIndex((v) => v._id === temp_id);
              console.log(index);

              draft.data[index] = data.data

            }),
          )

        } catch {
          patchResult.undo()


        }
      },
    }),
    updateCourse: builder.mutation({
      query: (data) => ({
        url: `course/updateCourse/${data.get('_id')}`,
        method: 'PUT',
        body: data
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {


        const patchResult = dispatch(
          courseApi.util.updateQueryData('getCourse', undefined, (draft) => {

            console.log("data._id", data._id);

            
        const ImageData = data.getAll('course_img');
        
  
            const index = draft?.data?.findIndex((v) => v._id === data.get('_id'))
            console.log(index,ImageData);

            if (index !== -1) {
              draft.data[index] = {
                _id: data.get('_id'),
                name: data.get('name'),
                description: data.get('description'),
                category_id: data.get('category_id'),
                price: data.get('price'),
                week: data.get('week'),
               course_img: ImageData.length > 0
              ? ImageData.map((v) => ({
                  url: URL.createObjectURL(v)
                }))
              : draft.data[index].course_img         
            //  Preview_url: da.ta.get('Preview_url')

              }
            }

          }),
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()


        }
      },
      // invalidatesTags:['course']
    }),
    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `course/deleteCourse/${id}`,
        method: 'DELETE',
        body: id
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          courseApi.util.updateQueryData('getCourse', undefined, (draft) => {
            const index = draft.data.findIndex((v) => v._id === id)
            console.log(index);

            if (index !== -1) {
              draft.data.splice(index, 1)
            }

          }),
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()


        }
      },
      // invalidatesTags: ['course']
    }),
    ActiveCourse: builder.mutation({
      query: (data) => ({
        url: `course/activeCourses/${data._id}`,
        method: 'PUT',
        body: data
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {


        const patchResult = dispatch(
          courseApi.util.updateQueryData('getCourse', undefined, (draft) => {

            console.log("data._id", data._id);


            const index = draft.data.findIndex((v) => v._id === data._id)
            console.log(index);

            if (index !== -1) {
              draft.data[index] = data

            }

          }),
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()


        }
      },
      // invalidatesTags:['course']
    }),

  })
})


export const {
  useGetCourseQuery,
  useAddCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useActiveCourseMutation } = courseApi