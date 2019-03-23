import ENDPOINT from "../constants/endpoint.js";

export function receiveInitialState(state) {
  return {
    type: 'RECEIVE_INITIAL_STATE',
    payload: state
  }
}

export function fetchInitialState() {
  return async function(dispatch) {
    const response = await fetch(`${ENDPOINT}/initial_states/scoops/1`);
    const state = await response.json()
    dispatch(receiveInitialState(state));
  }
}
