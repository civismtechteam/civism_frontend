const initialState = {
  name: ''
}

function scoopReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_INITIAL_STATE':
      return Object.assign({}, action.payload.scoop)
    default:
      return state
  }
}

export default scoopReducer
