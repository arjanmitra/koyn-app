import { configureStore } from '@reduxjs/toolkit'
import coinsSlice from './slices/coinsSlice'
import coinSlice from './slices/coinSlice';
import coinHistorySlice from './slices/coinHistorySlice';

export const store = configureStore({
    reducer: {
        coins: coinsSlice.reducer,
        coin: coinSlice.reducer,
        coinHistory: coinHistorySlice.reducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;