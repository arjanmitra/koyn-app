import CoinDetail from '@/app/components/CoinDetail';

interface CoinDetailProps {
    params: { id: string }
}
const CoinPage = async ({ params }: CoinDetailProps) => {

    const { id } = await params;
    const res = await fetch(`https://rest.coincap.io/v3/assets/${id}`, {
        headers: { Authorization: `Bearer ${process.env.COINCAP_API_KEY}` },
        cache: 'no-store'
    })
    const resHistory = await fetch(`https://rest.coincap.io/v3/assets/${id}/history?interval=d1`, {
        headers: { Authorization: `Bearer ${process.env.COINCAP_API_KEY}` },
        cache: 'no-store'
    })

    const { data } = await res.json();
    const dataHistory = await resHistory.json();

    return <CoinDetail initialCoinData={data} initialHistoryData={dataHistory.data} />
}

export default CoinPage