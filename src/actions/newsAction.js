import { coins_api_key, crypto_news_url } from "../urls";
export const newsAction = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": coins_api_key,
      "X-RapidAPI-Host": "crypto-news14.p.rapidapi.com",
    },
  };
  return async (dispatch) => {
    let response = await fetch(crypto_news_url, options);
    let data = await response.json();
    dispatch({
      type: "get-news",
      payload: {
        news: data,
      },
    });
  };
};
