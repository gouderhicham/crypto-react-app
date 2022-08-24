let initialState = {
  cryptDetails: {},
  priceDetails: {},
};
export const cryptoDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get-crypto-details":
      return {
        ...state,
        cryptDetails: action.payload.cryptoDetails.data.coin,
        priceDetails: action.payload.priceHistory.data,
      };
    default:
      return { ...state };
  }
};
