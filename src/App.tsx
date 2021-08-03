import { useState, useEffect } from "react";
import { CoinArray } from "./customTypes";
import Coin from "./components/Coin";
import Loading from "./components/Loading";

function App() {
    const URL = "https://api.nomics.com/v1/currencies/ticker";
    const apiKey = "44f9597487a61e3827be8cfef88ef4ec052b0672";
    const initialEndpoint = `${URL}?key=${apiKey}&ids=BTC,ETH,USDT,DOGE,DOT,BCH,LTC,BNB,ADA,XRP&attributes=id,logo_url`;

    const [coins, setCoins] = useState<CoinArray>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const data = await fetchData();
        setCoins(data);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    async function fetchData() {
        const response = await fetch(initialEndpoint);
        const data: Promise<any> = await response.json();
        return data;
    }

    return (
        <div className="app">
            {loading ? (
                <Loading />
            ) : (
                <div className="main-container">
                    <button
                        className="btn"
                        onClick={() => {
                            setLoading(true);
                            getData();
                        }}
                    >
                        Refresh
                    </button>
                    {coins &&
                        coins.map((coin, index) => {
                            return (
                                <div className="coin-list">
                                    <Coin coin={coin} key={index} />
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
}

export default App;
