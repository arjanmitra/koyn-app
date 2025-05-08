import { CoinCapAssetResponse } from "@/app/types/coincap";
import { NextResponse } from "next/server";

export const GET = async (_req: Request) => {

    const { searchParams } = new URL(_req.url)
    const id = searchParams.get('id') || 'bitcoin'
    const interval = searchParams.get('interval') || 'd1'

    const res = await fetch(`https://rest.coincap.io/v3/assets/${id}/history?interval=${interval}`, {
        headers: { Authorization: `Bearer ${process.env.COINCAP_API_KEY}` }
    })

    const data: CoinCapAssetResponse = await res.json();
    return new NextResponse(JSON.stringify(data.data))

}