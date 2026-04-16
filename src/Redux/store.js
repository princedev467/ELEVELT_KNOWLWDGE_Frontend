import { configureStore } from "@reduxjs/toolkit"
import category_reducer from './slice/CategorySlice'
// import SubCategory_reducer from'./slice/SubCategorySlice'
import authSlice from "./slice/auth.slice"
import  alertslice  from "./slice/alert.Slice"
import { courseApi } from "./Api/Course.Api"
import { sectionApi } from "./Api/Section.Api"
import { quizApi } from "./Api/Quiz.Api"

export const confistore=()=>{

    const store=configureStore({
        reducer:{
            category:category_reducer,
            // SubCategory:SubCategory_reducer,
            auth:authSlice,
            alert:alertslice,
            [courseApi.reducerPath]: courseApi.reducer,
            [sectionApi.reducerPath]:sectionApi.reducer,
            [quizApi.reducerPath]: quizApi.reducer,
            
        },
        middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([courseApi.middleware,sectionApi.middleware,quizApi.middleware]),
    })

    return store
}