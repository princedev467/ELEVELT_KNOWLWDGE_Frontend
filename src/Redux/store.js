import { configureStore } from "@reduxjs/toolkit"
import category_reducer from './slice/CategorySlice'
// import SubCategory_reducer from'./slice/SubCategorySlice'
import authSlice from "./slice/auth.slice"
import alertslice from "./slice/alert.Slice"
import { courseApi } from "./Api/Course.Api"
import { sectionApi } from "./Api/Section.Api"
import { quizApi } from "./Api/Quiz.Api"
import { quizContentApi } from "./Api/QuizContent.Api"
import { contentApi } from "./Api/Content.Api"
import { cartApi } from "./Api/Cart.Api"
import { couponApi } from "./Api/coupon.Api"

export const confistore = () => {

    const store = configureStore({
        reducer: {
            category: category_reducer,
            auth: authSlice,
            alert: alertslice,
            [courseApi.reducerPath]: courseApi.reducer,
            [sectionApi.reducerPath]: sectionApi.reducer,
            [quizApi.reducerPath]: quizApi.reducer,
            [quizContentApi.reducerPath]: quizContentApi.reducer,
            [contentApi.reducerPath]: contentApi.reducer,
            [cartApi.reducerPath]: cartApi.reducer,
            [couponApi.reducerPath]: couponApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                courseApi.middleware,
                sectionApi.middleware,
                quizApi.middleware,
                quizContentApi.middleware,
                contentApi.middleware,
                cartApi.middleware,
                couponApi.middleware
            ]),
    })

    return store
}