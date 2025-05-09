'use client'

import { useEffect, useState } from 'react'
import { CoinCapAsset, CoinCapAssetHistory } from '../types/coincap'
import { formatCurrency } from '../utils/helperFunctions'
import ChartDetail from './ChartDetail';
import MetadataDetail from './MetadataDetail';
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setCoinData } from '../store/slices/coinSlice';
import { setCoinHistoryData } from '../store/slices/coinHistorySlice';

interface CoinDetailProps {
    initialCoinData: CoinCapAsset,
    initialHistoryData: CoinCapAssetHistory[]
}

const CoinDetail = ({ initialCoinData, initialHistoryData }: CoinDetailProps) => {
    const dispatch = useAppDispatch();

    const coin = useAppSelector(state => state.coin.value)
    const coinHistory = useAppSelector(state => state.coinHistory.value)

    useEffect(() => {
        dispatch(setCoinData(initialCoinData));
        dispatch(setCoinHistoryData(initialHistoryData));
    }, [dispatch, initialCoinData, initialHistoryData]);


    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const res = await fetch(`/api/coin-asset/${initialCoinData.id}`);
                const data = await res.json();
                dispatch(setCoinData(data));
            } catch (error) {
                console.error("Failed to fetch coin data:", error);
            }
        };

        fetchCoinData();
        const interval = setInterval(fetchCoinData, 10000);

        return () => clearInterval(interval);
    }, [dispatch, initialCoinData.id]);

    return (
        <div className="flex flex-col justify-center items-center ymx-auto p-6 chartData text-white rounded-lg shadow-md font-sans mt-10 w-full m-w-9/10">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-xl font-semibold">{coin.name}</h1>
                        <p className="text-sm">{coin.symbol}</p>
                    </div>
                </div>

                <div className="text-3xl font-semibold">{formatCurrency(coin.priceUsd)} USD</div>
                {coinHistory ? <ChartDetail coinHistory={coinHistory} xAxisDataKey='date' yAxisDataKey='priceUsd' /> : <></>}
                <MetadataDetail coin={coin} />
                <button className="mt-4 text-sm text-gray-400 underline hover:text-white">More about <a href={coin.explorer}>{coin.name}</a></button>
            </div>
        </div>

    )
}

export default CoinDetail