const initialState = []

function factsReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_INITIAL_STATE':
      return action.payload.facts
    default:
      return state
  }
}

export default factsReducer
