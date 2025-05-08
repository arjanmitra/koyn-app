'use client'
import React from "react";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { CoinCapAsset } from "../types/coincap";
import { formatCurrency } from "../utils/helperFunctions";

interface CoinHomeDetailProps {
    coinData: CoinCapAsset[]
}

const CoinHomeDetail = ({ coinData }: CoinHomeDetailProps) => {

    const router = useRouter();
    const [sortKey, setSortKey] = useState<keyof CoinCapAsset>("rank");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const handleRowClick = (id: string) => {
        router.push(`/coin/${id}`)
    }

    const sortedData = useMemo(() => {
        if (!coinData) return [];
        const sorted = [...coinData].sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];

            if (typeof aValue === "string") {
                return sortDirection === "asc"
                    ? aValue.localeCompare(bValue as string)
                    : (bValue as string).localeCompare(aValue);
            }

            return sortDirection === "asc"
                ? (aValue as number) - ((bValue as unknown) as number)
                : ((bValue as unknown) as number) - (aValue as number);
        });
        return sorted;
    }, [coinData, sortKey, sortDirection]);

    const handleSort = (key: keyof CoinCapAsset) => {
        if (key === sortKey) {
            setSortDirection(prev => (prev === "asc" ? "desc" : "asc"));
        } else {
            setSortKey(key);
            setSortDirection("asc");
        }
    };

    const renderHeader = (label: string, key: keyof CoinCapAsset) => (
        <th
            className="border-b px-4 py-2 cursor-pointer select-none"
            onClick={() => handleSort(key)}>
            <div className="flex items-center gap-1">
                {label}
                {sortKey === key && (
                    <span className="text-xs">
                        {sortDirection === "asc" ? "▲" : "▼"}
                    </span>
                )}
            </div>
        </th>
    );

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="overflow-x-auto rounded-xl border-none w-full max-w-8/10">
                <table className="border text-sm text-left w-full border-none">
                    <thead className="bg-gray-500">
                        <tr>
                            {renderHeader("Rank", "rank")}
                            {renderHeader("Name", "name")}
                            {renderHeader("Price", "priceUsd")}
                            {renderHeader("Market Cap", "marketCapUsd")}
                            {renderHeader("Volume", "volumeUsd24Hr")}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData ? sortedData.map((coin, i) => (
                            <tr key={i} className="hover:bg-gray-500 bg-gray-700 cursor-pointer h-20" onClick={() => handleRowClick(coin.id)}>
                                <td className="border-b px-4 py-2 text-2xl">{coin.rank}</td>
                                <td className="border-b px-4 py-2 font-bold text-2xl">{coin.name}</td>
                                <td className="border-b px-4 py-2 font-bold text-2xl">{formatCurrency(coin.priceUsd)}</td>
                                <td className="border-b px-4 py-2 font-bold text-2xl">{formatCurrency(coin.marketCapUsd)}</td>
                                <td className="border-b px-4 py-2 font-bold text-2xl">{formatCurrency(coin.volumeUsd24Hr)}</td>
                            </tr>
                        )) : <></>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CoinHomeDetail;