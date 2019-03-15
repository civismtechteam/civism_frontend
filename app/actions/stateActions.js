export function receiveInitialState(state) {
  return {
    type: 'RECEIVE_INITIAL_STATE',
    payload: state
  }
}

export function fetchInitialState() {
  return async function(dispatch) {
    const response = await fetch('http://localhost:8080/api/initial_states/scoops/1');
    const state = await response.json()
    dispatch(receiveInitialState(state));
  }
}
