import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface invoiceData {
    invoiceNumber: number | undefined | null,
    customerName: string | undefined | null,
    customerAddress: string | undefined | null,
    supplierName: string | undefined | null,
    supplierAddress: string | undefined | null,
    invoiceDate: number | undefined | null,
    currency: string | undefined | null,
    totalAmount: number | undefined | null,
    totalNet: number | undefined | null,
    totalTax: number | undefined | null
  }

  export interface invoiceStateType  {
    data: invoiceData,
    loading: boolean,
    error: string | undefined;
  }
  

const initialState = {
    

    loading: false,
    error: '',
    data:{invoiceNumber: null,
        customerName: null,
        customerAddress: null,
        supplierName: null,
        supplierAddress:null,
        invoiceDate:null,
        currency: null,
        totalAmount: null,
        totalNet: null,
        totalTax: null}
} as invoiceStateType

export const parseInvoice = createAsyncThunk('info/parseInvoice',
        async (data: FormData) => {
            try {
                const response =   await axios
                .post('http://localhost:8800/parse', data)
                return response.data    
            } catch (error) {
            return(error);
            }      
        }
)

export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        handleClick(state) {
            state.data = initialState.data
        }
    },
    extraReducers: (builder) => {
        builder.addCase(parseInvoice.pending,(state)=> {
            state.loading = true;
            state.error = '';
        });

        builder.addCase(parseInvoice.fulfilled,(state, action: PayloadAction<invoiceData>) =>{
                state.data = action.payload;
                state.loading = false;
                state.error = '';
                
            });

        builder.addCase(parseInvoice.rejected,(state, action) =>{
                state.loading = false;
                state.error = action?.error.message;
            });

    } 
})

export const { handleClick} = infoSlice.actions

export default infoSlice.reducer