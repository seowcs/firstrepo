import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import  authSlice from '../features/info/authSlice';
import infoSlice from '../features/info/infoSlice';

const reducer = combineReducers({authSlice, infoSlice});

export const store = configureStore({
    reducer,
  })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch