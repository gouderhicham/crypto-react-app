export const coins_url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=11&offset=0";
export const coins_url_All =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=51&offset=0";
// supposed to be hidden in a .evn file but lazy to do it
export const coins_api_key =
  "5cfa285475msh7ea3a84888c7ce5p1e1e97jsnf62bfbcd3100";
export const crypto_news_url =
  "https://crypto-news14.p.rapidapi.com/news/cointelegraph";
export const crypto_details_url = (id) =>
  `https://coinranking1.p.rapidapi.com/coin/${id}?timePeriod=24h`;
export const crypto_price_url = (id, requested_date) =>`https://coinranking1.p.rapidapi.com/coin/${id}/history?timePeriod=${requested_date || "1y"}`;