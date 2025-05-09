import { configureStore } from '@reduxjs/toolkit'
import coinsSlice from './slices/coinsSlice'

export const store = configureStore({
    reducer: {
        coins: coinsSlice.reducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;