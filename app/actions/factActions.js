export function receiveFact(fact) {
  return {
    type: 'RECEIVE_FACT',
    payload: fact
  }
}
