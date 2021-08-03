import { CoinType } from "../customTypes";

interface CoinProps {
    coin: CoinType;
    key: number;
}

function Coin({ coin, key }: CoinProps) {
    return (
        <div key={key} className="coin-item">
            <div className="coin-meta">
                <img
                    className="coin-logo"
                    src={coin.logo_url}
                    alt={`${coin.id} Logo`}
                />
                <h1>{coin.id}</h1>
            </div>
            <h1 className="coin-price">
                ${Math.floor(Number(coin.price) * 1000) / 1000}
            </h1>
        </div>
    );
}

export default Coin;
