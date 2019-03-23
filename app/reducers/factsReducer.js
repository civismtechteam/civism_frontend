const initialState = []

function factsReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_INITIAL_STATE':
      return action.payload.facts
    case 'RECEIVE_FACT':
      return state.map(fact =>
        fact.id === action.payload.id ? action.payload : fact
      );
    default:
      return state
  }
}

export default factsReducer
