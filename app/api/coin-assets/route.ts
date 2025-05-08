import { CoinCapAssetResponse } from "@/app/types/coincap";
import { NextResponse } from "next/server";

export const GET = async (_req: Request) => {

    const { searchParams } = new URL(_req.url)
    const limit = searchParams.get('limit') || '1'

    const res = await fetch(`https://rest.coincap.io/v3/assets?limit=${limit}`, {
        headers: { Authorization: `Bearer ${process.env.COINCAP_API_KEY}` }
    })

    const data: CoinCapAssetResponse = await res.json();
    return new NextResponse(JSON.stringify(data.data))

}