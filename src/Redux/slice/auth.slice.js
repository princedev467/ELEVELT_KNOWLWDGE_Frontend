import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { axiosinstance } from "../../utility/Axios_interceptor";
import { setAlert } from "./alert.Slice";


const initialState = {
    isLoading: false,
    auth: null,
    error: null
}

export const addRegister = createAsyncThunk(
    'auth/addRegister',
    async (data, { dispatch, rejectWithValue }) => {
        try {

            const responce = await axiosinstance.post('user/register', data)

            if (responce.data.success) {
                console.log("responce.data.data", responce.data.data);
                dispatch(setAlert({ text: responce.data.message, variant: "success" }))
                return responce.data.data
            }
            console.log(responce);


        } catch (error) {
            console.log(error);
            dispatch(setAlert({ text: error.response.data.message, variant: "error" }))

            return rejectWithValue(error.response.data.message);


        }

    }
)

export const forgetPassword = createAsyncThunk(
    'auth/forgetPassword',
    async (data, { dispatch, rejectWithValue }) => {
        try {

            const responce = await axiosinstance.post('user/forgetPassword', data)

            if (responce.data.success) {
                console.log("responce.data.data", responce.data.data);
                return responce.data.data
            }
            console.log(responce);


        } catch (error) {
            console.log(error);
            dispatch(setAlert({ text: error.response.data.message, variant: "error" }))

            return rejectWithValue(error.response.data.message);


        }

    }
)
export const userLogin = createAsyncThunk(
    'auth/userLogin',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const responce = await axiosinstance.post('user/login', data)

            console.log(responce.data);

            if (responce.data.success) {
                dispatch(setAlert({ text: responce.data.message, variant: "success" }))
                console.log("responce.data.data", responce.data.data);


                return responce.data.data
            }

        } catch (error) {
            console.log(error);
            dispatch(setAlert({ text: error.response.data.message, variant: "error" }))

            return rejectWithValue(error.response.data.message);


        }
    }
)

export const userVerify = createAsyncThunk(
    'auth/userVerify',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const responce = await axiosinstance.post('user/userVerify', data)

            console.log(responce);
            if (responce.data.success) {
                dispatch(setAlert({ text: responce.data.message, variant: "success" }))
                console.log("responce.data.data", responce.data.data);

                return responce.data.data
            }
        } catch (error) {
            console.log(error);
            dispatch(setAlert({ text: error.response.data.message, variant: "error" }))

            return rejectWithValue(error.response.data.message);

        }
    }
)


export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const responce = await axiosinstance.post('user/resetPassword', data)

            console.log(responce);
            if (responce.data.success) {
                dispatch(setAlert({ text: responce.data.message, variant: "success" }))
                console.log("responce.data.data", responce.data.data);

                return responce.data.data
            }
        } catch (error) {
            console.log(error);
            dispatch(setAlert({ text: error.response.data.message, variant: "error" }))

            return rejectWithValue(error.response.data.message);

        }
    }
)
export const userLogout = createAsyncThunk(
    'auth/userLogout',
    async (_id, { dispatch }) => {
        console.log("id", _id);

        try {
            console.log("id", _id);
            const responce = await axiosinstance.post('user/LogOut', { _id })

            console.log(responce.data);

            if (responce.data.success) {
                console.log("responce.data.data", responce.data.data);
                dispatch(setAlert({ text: responce.data.message, variant: "success" }))
                return responce.data.data
            }
        } catch (error) {
            console.log(error);

        }
    }
)

export const userCheck = createAsyncThunk(
    'auth/userCheck',
    async (_, { dispatch, rejectWithValue }) => {


        try {
            const responce = await axiosinstance.get('user/checkAuth')

            console.log(responce);

            if (responce.data.success) {
                console.log("responce.data.data", responce.data.data);

                return responce.data.data

                
            }
        } catch (error) {
            // console.log(error);
            //   dispatch(setAlert({ text: error.response.data.message, variant: "error" }))

            return rejectWithValue(error.response.data.message);

        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state, action) => {
            state.isLoading = true;
            state.auth = null;
            state.error = null;
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.auth = action.payload;
            state.error = null;
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.auth = null;
            state.error = action.payload;
        })
        builder.addCase(userVerify.fulfilled, (state, action) => {
            state.isLoading = false;
            state.auth = action.payload;
            state.error = null;
        })
        builder.addCase(userVerify.rejected, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.auth = null;
            state.error = action.payload;
        })
        builder.addCase(userLogout.fulfilled, (state, action) => {
            state.isLoading = false;
            state.auth = action.payload;
            state.error = null;
        })
         builder.addCase(addRegister.pending, (state, action) => {
            state.isLoading = true;
            state.auth = null;
            state.error = null;
        })
        builder.addCase(addRegister.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.auth = action.payload;
            state.error = null;
        })
        builder.addCase(addRegister.rejected, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.auth = null;
            state.error = action.payload;
        })
        builder.addCase(userCheck.pending, (state, action) => {
            state.isLoading = true;
           })
        builder.addCase(userCheck.fulfilled, (state, action) => {
            console.log(action.payload);

             state.isLoading = false;
            state.auth = action.payload;
            state.error = null;
            
        })
        builder.addCase(userCheck.rejected, (state, action) => {
            console.log(action?.payload);
            state.isLoading = false;
            state.auth = null;
            state.error = action.payload;
        })
         builder.addCase(forgetPassword.pending, (state, action) => {
            state.isLoading = true;
            state.auth = null;
            state.error = null;
        })
        builder.addCase(forgetPassword.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.auth = action.payload;
            state.error = null;
        })
        builder.addCase(forgetPassword.rejected, (state, action) => {
            console.log(action.payload);

            state.isLoading = false;
            state.auth = null;
            state.error = action.payload;
        })
        builder.addCase(resetPassword.pending, (state, action) => {
            state.isLoading = true;
            state.auth = null;
            state.error = null;
        })
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.auth = action.payload;
            state.error = null;
        })
        builder.addCase(resetPassword.rejected, (state, action) => {
            console.log(action.payload);

            state.isLoading = false;
            state.auth = null;
            state.error = action.payload;
        })
    }
})

export default authSlice.reducer