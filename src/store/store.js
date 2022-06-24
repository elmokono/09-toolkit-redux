import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slicers/counter'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
})