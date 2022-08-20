let initialState = {
  total24hVolume: null,
  totalCoins: null,
  totalExchanges: null,
  totalMarketCap: null,
  totalMarkets: null,
  popularCryptos: null,
  All_CRYPTOS : null, 
};
export const getCryptos = (state = initialState, action) => {
  switch (action.type) {
    case "get-cryptos":
      return {
        ...state,
        total24hVolume: action.payload.total24hVolume,
        totalCoins: action.payload.totalCoins,
        totalExchanges: action.payload.totalExchanges,
        totalMarketCap: action.payload.totalMarketCap,
        totalMarkets: action.payload.totalMarkets,
        popularCryptos: action.payload.popularCryptos,
        All_CRYPTOS : action.payload.All_CRYPTOS
      };
    default:
      return { ...state };
  }
};
