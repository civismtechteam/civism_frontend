const initialState = []

function perspectivesReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_INITIAL_STATE':
      return action.payload.perspectives
    default:
      return state
  }
}

export default perspectivesReducer
