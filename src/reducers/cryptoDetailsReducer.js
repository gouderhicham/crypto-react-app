let initialState = {
  cryptDetails: {},
};
export const cryptoDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get-crypto-details":
      return { ...state, cryptDetails: action.payload.cryptoDetails.data.coin };
    default:
      return { ...state };
  }
};
