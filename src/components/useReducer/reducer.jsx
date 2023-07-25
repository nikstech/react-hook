const reducer = (state, action) => {
  if (action.type === "INCR") {
    return state + 1;
  }
  if (action.type === "DECR") {
    // return (state = state - 1);
    state >= 1 ? (state = state - 1) : (state = 0);
    return state;
  }
};

export default reducer;