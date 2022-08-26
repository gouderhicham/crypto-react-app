let initialState = {
  input: "",
  date: "",
};
export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fill-input":
      return {
        ...state,
        input: action.payload.input,
      };
    default:
      return { ...state };
  }
};
