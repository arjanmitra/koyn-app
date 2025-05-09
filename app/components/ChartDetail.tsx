"use client";

import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { CoinCapAssetHistory } from "../types/coincap";

interface ChartDetailProps {
    coinHistory: CoinCapAssetHistory[];
    xAxisDataKey: string;
    yAxisDataKey: string;
}

const ChartDetail = ({ coinHistory, xAxisDataKey, yAxisDataKey }: ChartDetailProps) => {
    const [isDark, setIsDark] = useState(false);

    const formattedData = coinHistory?.map((item) => ({
        ...item,
        date: item.date.split("T")[0],
    }));

    useEffect(() => {
        setIsDark(localStorage.getItem("theme") === "dark");
    }, []);

    return (
        <div className="w-full max-w-full px-4 mt-10 mb-20">
            <div className="w-full h-[300px] sm:h-[400px] lg:w-[1000px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={formattedData}
                        margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                    >
                        <XAxis dataKey={xAxisDataKey} />
                        <YAxis dataKey={yAxisDataKey} />
                        <Line
                            type="linear"
                            dataKey="priceUsd"
                            stroke={isDark ? "black" : "white"}
                            fillOpacity={1}
                            fill="white"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ChartDetail;