import { configureStore } from '@reduxjs/toolkit';
import infoSlice from '../features/info/infoSlice';

export const store = configureStore({
    reducer: infoSlice,
  })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch