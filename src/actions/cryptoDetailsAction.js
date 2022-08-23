import { coins_api_key, crypto_details_url } from "../urls";
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
    let data = await response.json();
    dispatch({
      type: "get-crypto-details",
      payload: {
        cryptoDetails: data,
      },
    });
  };
};
