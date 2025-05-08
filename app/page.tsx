'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CoinCapAsset } from "./types/coincap";
import { formatCurrency } from "./utils/helperFunctions";

export default function CoinHome() {

  const router = useRouter();
  const [coinData, setCoinData] = useState<CoinCapAsset[]>([])

  useEffect(() => {
    // const interval = setInterval(() => {
    fetch(`/api/coin-assets?limit=10`)
      .then(async (res) => {
        const data = await res.json();
        setCoinData(data);
      })
    // }, 5000)

    // return () => clearInterval(interval)
  }, [])

  const handleRowClick = (id: string) => {
    router.push(`/coin/${id}`)
  }

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="overflow-x-auto rounded-xl border-none w-full max-w-8/10">
        <table className="border text-sm text-left w-full border-none">
          <thead className="bg-gray-500">
            <tr>
              <th className="border-b px-4 py-2">Rank</th>
              <th className="border-b px-4 py-2">Name</th>
              <th className="border-b px-4 py-2">Price</th>
              <th className="border-b px-4 py-2">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coinData ? coinData.map((coin, i) => (
              // <Link href={`/coin/${coin.id}`}>
              <tr key={i} className="hover:bg-gray-500 bg-gray-700 cursor-pointer h-20" onClick={() => handleRowClick(coin.id)}>
                <td className="border-b px-4 py-2 text-2xl">{coin.rank}</td>
                <td className="border-b px-4 py-2 font-bold text-2xl">{coin.name}</td>
                <td className="border-b px-4 py-2 font-bold text-2xl">{formatCurrency(coin.priceUsd)}</td>
                <td className="border-b px-4 py-2 font-bold text-2xl">{formatCurrency(coin.marketCapUsd)}</td>
              </tr>
              // </Link>
            )) : <></>}
          </tbody>
        </table>
      </div>
    </div>

  );
}
