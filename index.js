// Library Code
function createStore() {
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
    state = todods(state, action)
    listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

// App Code
function todods (state = [], action) {
  if (action.type === 'ADD_TODO') {
    return state.concat([action.todo])
  }
  return state
}

const store = createStore()
store.subscribe(() => {
  console.log('The new state is', store.getState())
})
store.subscribe(() => {
  console.log('store has changed.')
})
