'use client';

import React from "react";
import { formatCurrency } from "../utils/helperFunctions";
import { CoinCapAsset } from "../types/coincap";

interface MetadataDetailProps {
    coin: CoinCapAsset
}

const MetadataDetail = ({ coin }: MetadataDetailProps) => {
    return (
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-200 mt-4">
            <div>Supply: <span className="text-white">{formatCurrency(coin.supply)}</span></div>
            <div>Max Supply: <span className="text-white">{coin.maxSupply ? formatCurrency(coin.maxSupply) : 'N/A'}</span></div>
            <div>Market Cap: <span className="text-white">{formatCurrency(coin.marketCapUsd)}</span></div>
            <div>Volume 24 Hr: <span className="text-white">{formatCurrency(coin.volumeUsd24Hr)}</span></div>
            <div>Change 24 Hr: <span className="text-white">{formatCurrency(coin.changePercent24Hr)}</span></div>
            <div>VWAP 24 Hr: <span className="text-white">{formatCurrency(coin.vwap24Hr)}%</span></div>
        </div>
    )
}

export default MetadataDetail;