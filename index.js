function createStore () {
  // The store should have four parts:
  // 1. The State
  // 2. Get the state
  // 3. Listen for the changes on the state
  // 4. Update the state

  let state

  const getState = () => state

  return {
    getState
  }
}
