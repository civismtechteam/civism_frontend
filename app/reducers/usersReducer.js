const initialState = {};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_INITIAL_STATE':
      return Object.assign({}, action.payload.users)
    default:
      return state
  }
}

export default usersReducer
