interface CoinType {
    id: string;
    logo_url: string;
    price: string;
}
type CoinArray = CoinType[] | undefined;

export type { CoinArray, CoinType };
