import { CoinCapAssetHistory } from '@/app/types/coincap'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CoinHistoryState {
    value: CoinCapAssetHistory[]
}

const initialState: CoinHistoryState = {
    value: []
}
export const coinHistorySlice = createSlice({
    name: 'coinHistory',
    initialState,
    reducers: {
        setCoinHistoryData: (state, action: PayloadAction<CoinCapAssetHistory[]>) => {
            state.value = action.payload

        }
    }
})

export const { setCoinHistoryData } = coinHistorySlice.actions

export default coinHistorySlice