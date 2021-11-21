// Reducer --> a function that takes old state and action --> and returns a new state
const contextReducer = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter((t) => action.payload !== t.id);
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;

    default:
      return state;
  }
};

export default contextReducer;
