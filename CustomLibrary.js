// Library Code
function createStore(reducer) {
  // The store should have four parts:
  // 1. The State
  // 2. Get the state
  // 3. Listen for the changes on the state
  // 4. Update the state

  let state
  let listeners = []

  const getState = () => state
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}
