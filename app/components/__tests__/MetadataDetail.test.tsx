import { CoinCapAsset } from '@/app/types/coincap'
import MetadataDetail from '../MetadataDetail'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const dummyData: CoinCapAsset = {
    "id": "bitcoin",
    "rank": "1",
    "symbol": "BTC",
    "name": "Bitcoin",
    "supply": "19861987.0000000000000000",
    "maxSupply": "21000000.0000000000000000",
    "marketCapUsd": "2007353572522.1112021283656786",
    "volumeUsd24Hr": "22350883471.5533426705291109",
    "priceUsd": "101065.0934633131721478",
    "changePercent24Hr": "4.5336565154192709",
    "vwap24Hr": "98589.8343382138712264",
    "explorer": "https://blockchain.info/"
}

describe('CoinHomeDetail', () => {
    it('renders a div', () => {
        render(<MetadataDetail coin={dummyData} />)

        const div = screen.getByTestId("metadata");

        expect(div).toBeInTheDocument();
        expect(div.tagName).toBe("DIV");
    })
})