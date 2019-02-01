// Library Code
function createStore (reducer) {
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

// App Code
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

function addTodoAction (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodoAction (id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodoAction (id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

function addGoalAction (goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

function todods (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo])

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id)

    case TOGGLE_TODO:
      return state.map((todo) => todo.id !== action.id ? todo
        : Object.assign({}, todo, { complete: !todo.complete }))

    default:
      return state
  }
}
function goals (state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal])

    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id)

    default:
      return state
  }
}

function app (state = {}, action) {
  return {
    todos: todods(state.todos, action),
    goals: goals(state.goals, action)
  }
}

const store = createStore(app)
store.subscribe(() => {
  console.log('The new state is', store.getState())
})

store.dispatch(addTodoAction({
  id: 0,
  name: 'Learn Redux',
  complete: false
}))

store.dispatch(addTodoAction({
  id: 1,
  name: 'Learn Algoritham',
  complete: false
}))

store.dispatch(removeTodoAction(0))
store.dispatch(addGoalAction({
  id: 0,
  name: 'Placed in a good company',
  complete: false
}))

store.dispatch(addGoalAction({
  id: 1,
  name: 'Do something greate',
  complete: false
}))

store.dispatch(removeGoalAction(1))
store.dispatch(toggleTodoAction(1))
