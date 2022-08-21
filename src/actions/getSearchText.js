export const getSearchText = (input) => {
  return async (dispatch) => {
    dispatch({
      type: "fill-input",
      payload: {
        input: input,
      },
    });
  };
};
