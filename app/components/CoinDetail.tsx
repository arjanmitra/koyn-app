'use client'

import { useEffect, useState } from 'react'
import { CoinCapAsset } from '../types/coincap'
import { formatCurrency } from '../utils/helperFunctions'
import ChartDetail from './ChartDetail';
import MetadataDetail from './MetadataDetail';

interface CoinDetailProps {
    initialCoinData: CoinCapAsset,
    initialHistoryData: any
}

const CoinDetail = ({ initialCoinData, initialHistoryData }: CoinDetailProps) => {
    const [coin, setCoin] = useState<CoinCapAsset>(initialCoinData)
    const [coinHistory, setCoinHistory] = useState(initialHistoryData)

    useEffect(() => {
        const interval = setInterval(async () => {
            const res = await fetch(`/api/coin-asset/${coin.id}`)
            const data = await res.json()
            setCoin(data)

            const resHistory = await fetch(`/api/coin-asset/${coin.id}/history`)
            const dataHistory = await resHistory.json()
            setCoinHistory(dataHistory)
        }, 10000)

        return () => clearInterval(interval)
    }, [coin.id])

    return (
        <div className="max-w-2xl mx-auto p-6 bg-black text-white rounded-lg shadow-md font-sans mt-10 w-full m-w-9/10">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-xl font-semibold">{coin.name}</h1>
                    <p className="text-sm">{coin.symbol}</p>
                </div>
            </div>

            <div className="text-3xl font-semibold">{formatCurrency(coin.priceUsd)} USD</div>
            <ChartDetail coinHistory={coinHistory} xAxisDataKey='date' yAxisDataKey='priceUsd' />
            <MetadataDetail coin={coin} />
            <button className="mt-4 text-sm text-gray-400 underline hover:text-white">More about <a href={coin.explorer}>{coin.name}</a></button>
        </div>

    )
}

export default CoinDetail