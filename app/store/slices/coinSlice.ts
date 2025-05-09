import { CoinCapAsset } from '@/app/types/coincap'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CoinState {
    value: any
}

const initialState: CoinState = {
    value: {}
}
export const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setCoinData: (state, action: PayloadAction<CoinCapAsset>) => {
            state.value = action.payload

        }
    }
})

export const { setCoinData } = coinSlice.actions

export default coinSlice