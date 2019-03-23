import { receivePerspective } from "./perspectiveActions.js";
import { receiveFact } from "./factActions.js";
import ENDPOINT from "../constants/endpoint.js";
import pluralize from "pluralize";

export function createVote({ resource, id, direction }) {
  return async function(dispatch) {
    const response = await fetch(
      `${ENDPOINT}/${pluralize(resource)}/${id}/votes`,
      {
        method: "POST",
        body: JSON.stringify({
          vote: { direction, user_id: 1 } //TODO: remove user
        }),
        headers: { 'Content-type': 'application/json' }
      }
    );
    const responseData = await response.json();
    if(responseData.error) {
      console.log(error);
    }
    switch (resource) {
      case "fact":
        dispatch(receiveFact(responseData.resource));
        break;
      case "perspective":
        dispatch(receivePerspective(responseData.resource));
        break;
      default:
        raise("No matching resource!");
    }
  }
}
