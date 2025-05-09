import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CoinCapAssetHistory } from "../types/coincap";

interface ChartDetailProps {
    coinHistory: CoinCapAssetHistory[]
    xAxisDataKey: string
    yAxisDataKey: string
}

const ChartDetail = ({ coinHistory, xAxisDataKey, yAxisDataKey }: ChartDetailProps) => {

    for (let i = 0; i < coinHistory.length; i++) {
        coinHistory[i].date = coinHistory[i].date.split("T")[0];
    }

    return (
        <div className="mt-20 mb-20">
            <LineChart width={1100} height={300} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }} data={coinHistory}>
                <XAxis dataKey={xAxisDataKey} />
                <YAxis dataKey={yAxisDataKey} />
                <Legend />
                <Line type={'monotone'} dataKey={'priceUsd'} stroke={'white'} fillOpacity={1} fill="white" />
            </LineChart>
        </div>
    )
}

export default ChartDetail;