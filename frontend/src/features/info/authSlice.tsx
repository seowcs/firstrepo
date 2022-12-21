import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface userData {
    username: string;
    email: string;
}

export interface userStateType {
    loading: boolean,
    error: string | undefined,
    isLoggedIn: boolean,
    data: userData
}

const initialState= {
    loading:false,
    error:'',
    isLoggedIn:false,
    data:{
        username:'',
        email:''
    }
} as userStateType;

interface inputData {
    username: string;
    password: string;
}

export const login = createAsyncThunk('auth/login',
   async (details: inputData) => {
    try {
        const response = await axios.post('http://localhost:8800/auth/login', details);
        return response.data;
    } catch (error) {
        return error
    }
       })

export const authSlice = createSlice({
    name: 'auth',
    initialState ,
    reducers: {
        logout(state: userStateType) {
            state.data = initialState.data
            state.isLoggedIn = false
            localStorage.setItem("user", JSON.stringify(state));
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = "";
          });

        builder.addCase(login.fulfilled, (state, action: PayloadAction)=>{
            state.loading = false;
            state.error = '';
            state.isLoggedIn = true;
            Object.assign(state.data,action.payload);
            localStorage.setItem("user", JSON.stringify(state));
        } );

        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.error.message;
          });

        }        
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;