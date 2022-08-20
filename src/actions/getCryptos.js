import { coins_api_key, coins_url, coins_url_All } from "../urls";
export const fetch_crypto_action = (coins_size) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": coins_api_key,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  return async (dispatch) => {
    const api = await fetch(coins_url, options);
    const data = await api.json();
    const status = await data.data.stats;
    const cryps = await data.data.coins;
    const api_2 = await fetch(coins_url_All, options);
    const data_2 = await api_2.json();
    const All_cryps = await data_2.data.coins;
    dispatch({
      type: "get-cryptos",
      payload: {
        total24hVolume: status.total24hVolume,
        totalCoins: status.totalCoins,
        totalExchanges: status.totalExchanges,
        totalMarketCap: status.totalMarketCap,
        totalMarkets: status.totalMarkets,
        popularCryptos: cryps, 
        All_CRYPTOS : All_cryps
      },
    });
  };
};
