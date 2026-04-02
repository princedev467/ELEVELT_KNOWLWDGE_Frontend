import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    isloading: false,
    subCategory: [],
    errror: null
}

export const addSubCategory = createAsyncThunk(
    'SubCategory/addSubCategory',
    async (data) => {
        console.log(data);
        
        try {

            const responce = await axios.post('http://localhost:3000/SubCategory',data)  
           
            console.log(data);

            return responce.data;

        } catch (error) {
            console.log(error);

        }

    }
)

export const getSubCategory = createAsyncThunk(
    'SubCategory/getSubCategory',
    async () => {
        try {
            const responce = await axios.get('http://localhost:3000/SubCategory')

           
            console.log(responce.data);

            return responce.data
        } catch (error) {
            console.log(error);

        }

    }
)

export const deleteSubCategory = createAsyncThunk(
    'SubCategory/deleteSubCategory',
    async (id) => {
        try {

            const responce = await axios.delete(`http://localhost:3000/SubCategory/${id}`)


            return responce.data.id

        } catch (error) {
            console.log(error);

        }
    }
)

export const updateSubCategory = createAsyncThunk(
    'SubCategory/updateSubCategory',
    async (data) => {
        console.log(data);


        try {

            const responce = await axios.put(`http://localhost:3000/SubCategory/${data.id}`,data)

            console.log(responce.data);
            
            return responce.data

        } catch (error) {
            console.log(error);

        }
    }
)


const subCategorySlice = createSlice({
    name: 'SubCategory',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getSubCategory.fulfilled, (state, action) => {
            state.subCategory = action.payload
        })
        builder.addCase(addSubCategory.fulfilled, (state, action) => {
            state.subCategory.push(action.payload)
        })

        builder.addCase(deleteSubCategory.fulfilled, (state, action) => {
            state.subCategory = state.subCategory.filter((v) => v.id !== action.payload);
        })

        builder.addCase(updateSubCategory.fulfilled, (state, action) => {
            console.log(action, state.subCategory);

            const Index = state.subCategory.findIndex((v) => v.id === action.payload.id);

            console.log(Index);

            state.subCategory[Index] = action.payload;
        })

    }
})

export default subCategorySlice.reducer