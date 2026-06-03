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
import { PaymentApi } from "./Api/Payment.Api"
import { progressApi } from "./Api/progress.Api"
import { enrollmentApi } from "./Api/enrollment.Api"
import { certificateApi } from "./Api/certificate.Api"
import { ReviewApi } from "./Api/Review.Api"
import { WhistlistApi } from "./Api/Whistlist.Api"
import { blogApi } from "./Api/blog.Api"
import { blogSectionApi } from "./Api/blogSection.Api"
import { tagApi } from "./Api/tag.Api"
import { blogLikesApi } from "./Api/blogLikes.Api"

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
            [PaymentApi.reducerPath]: PaymentApi.reducer,
            [progressApi.reducerPath]: progressApi.reducer,
            [enrollmentApi.reducerPath]: enrollmentApi.reducer,
            [certificateApi.reducerPath]:certificateApi.reducer,
            [ReviewApi.reducerPath]:ReviewApi.reducer,
            [WhistlistApi.reducerPath]:WhistlistApi.reducer,
            [blogApi.reducerPath]:blogApi.reducer,
            [blogSectionApi.reducerPath]:blogSectionApi.reducer,
            [tagApi.reducerPath]:tagApi.reducer,
            [blogLikesApi.reducerPath]:blogLikesApi.reducer

            

        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                courseApi.middleware,
                sectionApi.middleware,
                quizApi.middleware,
                quizContentApi.middleware,
                contentApi.middleware,
                cartApi.middleware,
                couponApi.middleware,
                PaymentApi.middleware,
                progressApi.middleware,
                enrollmentApi.middleware,
                certificateApi.middleware,
                ReviewApi.middleware,
                WhistlistApi.middleware,
                blogApi.middleware,
                blogSectionApi.middleware,
                tagApi.middleware,
                blogLikesApi.middleware

            ]),
    })

    return store
}