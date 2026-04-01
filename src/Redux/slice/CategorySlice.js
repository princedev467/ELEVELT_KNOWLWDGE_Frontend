import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utility/url";
import axios from "axios";
import { axiosinstance } from "../../utility/Axios_interceptor";


const initialState = {
    isloading: false,
    category: [],
    error: null
}

export const addCategory = createAsyncThunk(
    'category/addCategory',
    async (data) => {
        try {

            console.log("add Data:=", data)
            let formData = new FormData();

            formData.append('name', data.name);
            formData.append('description', data.description);
            formData.append('category_img', data.category_img);

            if (data.parent_category_id) {
                formData.append('parent_category_id', data.parent_category_id);
            }
            


            const responce = await axiosinstance.post('category/addCategory', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("formData", formData);

            console.log(responce);

            return responce.data.data
            
        } catch (error) {
            console.log(error);

        }

    }
)

export const getCategory = createAsyncThunk(
    'category/getCategory',
    async (_,{rejectWithValue}) => {
        try {
            const responce = await axiosinstance.get('category/getAllCategory');
            console.log(responce);

            return responce.data.data

        } catch (error) {
            console.log(error);
 
            return rejectWithValue(error.message);

        }
    }
)

export const deleteCategory = createAsyncThunk(
    'category/deleteCategory',
    async (id, { rejectWithValue }) => {
        try {
            const responce = await axiosinstance.delete(`category/deleteCategory/${id}`);


            return id;


        } catch (error) {
            console.log(error);

            return rejectWithValue(error.message);


        }

    }

)

export const updateCategory = createAsyncThunk(
    'category/updateCategory',
    async (data) => {
        console.log("------------", data);

        try {

            let formData = new FormData();

            formData.set('name', data.name);
            formData.set('description', data.description);
            formData.set('category_img', data.category_img)
            // formData.set('parent_category_id', data.parent_category_id);

            const responce = await axios.put(`${BASE_URL}category/updateCategory/${data._id}`, formData) 

            console.log("formData", formData);

            console.log("updateREsponce",responce);

             return responce.data.data

        } catch (error) {
            console.log(error);

        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: (builder) => {
         builder.addCase(getCategory.pending, (state, action) => {
            state.isloading =true;
        })

        builder.addCase(getCategory.fulfilled, (state, action) => {
             state.isloading =false;
            state.category = action.payload;
        })

          builder.addCase(getCategory.rejected, (state, action) => {
             state.isloading =false,
            state.category = [];
            state.error =action.payload;
        })
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.category.push(action.payload)
        })

        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.category = state.category?.filter((v) => v._id !== action.payload);
        })

        builder.addCase(updateCategory.fulfilled, (state, action) => {
            console.log(state.category);

            const Index = state.category?.findIndex((v) => v._id === action.payload._id);
            console.log("category INDEX:", Index);

            state.category[Index] = action.payload;
        })
    }
})

export default categorySlice.reducer