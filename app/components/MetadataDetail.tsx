'use client';

import React from "react";
import { formatCurrency } from "../utils/helperFunctions";
import { CoinCapAsset } from "../types/coincap";

interface MetadataDetailProps {
    coin: CoinCapAsset
}

const MetadataDetail = ({ coin }: MetadataDetailProps) => {
    return (
        <div id={'metadata'} data-testid={'metadata'} className="grid grid-cols-2 gap-3 text-sm text-gray-200 mt-4 chartData">
            <div>Supply: <span className="chartData" data-testid='supply'>{formatCurrency(coin.supply)}</span></div>
            <div>Max Supply: <span className="chartData">{coin.maxSupply ? formatCurrency(coin.maxSupply) : 'N/A'}</span></div>
            <div>Market Cap: <span className="chartData">{formatCurrency(coin.marketCapUsd)}</span></div>
            <div>Volume 24 Hr: <span className="chartData">{formatCurrency(coin.volumeUsd24Hr)}</span></div>
            <div>Change 24 Hr: <span className="chartData">{formatCurrency(coin.changePercent24Hr)}</span></div>
            <div>VWAP 24 Hr: <span className="chartData" data-testid='vwap'>{formatCurrency(coin.vwap24Hr)}%</span></div>
        </div>
    )
}

export default MetadataDetail;