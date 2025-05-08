import CoinHomeDetail from "./components/CoinHomeDetail";

const CoinHome = async () => {

  const res = await fetch(`https://rest.coincap.io/v3/assets?limit=2`, {
    headers: { Authorization: `Bearer ${process.env.COINCAP_API_KEY}` },
    cache: 'no-store'
  })

  const { data } = await res.json();

  return <CoinHomeDetail coinData={data} />
}

export default CoinHome


