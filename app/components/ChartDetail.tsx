import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

interface ChartDetailProps {
    coinHistory: any
    xAxisDataKey: string
    yAxisDataKey: string
}

const ChartDetail = ({ coinHistory, xAxisDataKey, yAxisDataKey }: ChartDetailProps) => {
    return (
        <LineChart width={800} height={300} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }} data={coinHistory}>
            <XAxis dataKey={xAxisDataKey} />
            <YAxis dataKey={yAxisDataKey} />
            <Tooltip />
            <Legend />
            <Line type={'monotone'} dataKey={'priceUsd'} stroke={'white'} strokeWidth={0.2} />
        </LineChart>
    )
}

export default ChartDetail;