export interface CoinCapAsset {
    id: string
    rank: string
    symbol: string
    name: string
    supply: string
    maxSupply: string
    marketCapUsd: string
    volumeUsd24Hr: string
    priceUsd: string
    changePercent24Hr: string
    vwap24Hr: string
    explorer: string
}

export interface CoinCapAssetResponse {
    data: CoinCapAsset[]
    timestamp: number
}

export interface CoinCapAssetHistory {
    priceUsd: string
    time: number
    date: string
}