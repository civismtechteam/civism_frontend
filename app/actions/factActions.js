import ENDPOINT from "../constants/endpoint.js";

export function receiveFact(fact) {
  return {
    type: 'RECEIVE_FACT',
    payload: fact
  }
}

export function addFact(fact) {
  return {
    type: 'ADD_FACT',
    payload: fact
  }
}

export function createFact({ fact, scoopId }) {
  return async function(dispatch) {
    const response = await fetch(
      `${ENDPOINT}/scoops/${scoopId}/facts`,
      {
        method: "POST",
        body: JSON.stringify({
          fact: { ...fact, user_id: 1 } //TODO: remove user
        }),
        headers: { 'Content-type': 'application/json' }
      }
    );
    const responseData = await response.json();
    if(responseData.error) {
      console.log(error);
    } else {
      dispatch(addFact(responseData.resource));
    }
  }
}
