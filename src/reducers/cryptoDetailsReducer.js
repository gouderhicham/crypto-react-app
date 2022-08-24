let initialState = {
  cryptDetails: {},
  priceDetails: {},
  loading: true,
};
export const cryptoDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get-crypto-details":
      return {
        ...state,
        cryptDetails: action.payload.cryptoDetails.data.coin,
        priceDetails: action.payload.priceHistory.data,
        loading: false,
      };
    case "set-loading":
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state };
  }
};
