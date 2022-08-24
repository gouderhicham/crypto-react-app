import { coins_api_key, crypto_details_url, crypto_price_url } from "../urls";
export const cryptDetailsAction = (id) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": coins_api_key,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  return async (dispatch) => {
    let response = await fetch(crypto_details_url(id), options);
    let price_response = await fetch(crypto_price_url(id), options);
    let data = await response.json();
    let priceData = await price_response.json();
    dispatch({
      type: "get-crypto-details",
      payload: {
        cryptoDetails: data,
        priceHistory: priceData,
      },
    });
  };
};
