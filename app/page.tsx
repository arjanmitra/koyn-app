import CoinHomeDetail from "./components/CoinHomeDetail";
import { setCoinsData } from "./store/slices/coinsSlice";

const CoinHome = async () => {

  const res = await fetch(`https://rest.coincap.io/v3/assets?limit=4`, {
    headers: { Authorization: `Bearer ${process.env.COINCAP_API_KEY}` },
    cache: 'no-store'
  })

  const { data } = await res.json();

  return <CoinHomeDetail coinData={data} />
}

export default CoinHome


