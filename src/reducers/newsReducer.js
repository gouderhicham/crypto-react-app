let initialState = {
  news: [],
};
export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get-news":
      return {
        ...state,
        news : action.payload.news
      };
    default:
      return { ...state };
  }
};
