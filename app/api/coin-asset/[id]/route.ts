import { CoinCapAssetResponse } from '@/app/types/coincap'
import { NextResponse } from 'next/server'

export const GET = async (_req: Request, context: any) => {
    const { id } = await context.params
    const res = await fetch(`https://rest.coincap.io/v3/assets/${id}`, {
        headers: { Authorization: `Bearer ${process.env.COINCAP_API_KEY}` }
    })

    const data: CoinCapAssetResponse = await res.json();
    return new NextResponse(JSON.stringify(data.data), { status: 200 })

}