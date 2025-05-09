import { CoinCapAsset } from '@/app/types/coincap'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CoinsState {
    value: CoinCapAsset[]
}

const initialState: CoinsState = {
    value: []
}
export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setCoinsData: (state, action: PayloadAction<CoinCapAsset[]>) => {
            state.value = action.payload

        }
    }
})

export const { setCoinsData } = coinsSlice.actions

export default coinsSlice