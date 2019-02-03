# Redux-with-simple-ui
This repository contain the simple implementation of Redux without any react code. It covers the following main concepts of Redux:-
* Store - It contains the `state` and functions to do three essential task:-
  * Get the current state
  * Listen to changes for the state
  * Update the State
* Reducer - It is a function that takes the `state` and `action` and then return the new state according to the `action`.
* Action - It is basically kind of user defined event that is responsible for state change. It must have a `type` property.
* Dispatcher(dispatch) - This apply any action to the store.
* Subscribe - This function takes a `callback`  that should be called whenever `state (store)` is changed/updated.
* Middleware - These are the functions that stay between dispatcher and reducer. These are called before the reducer is called.

# File Structure
* `index.html`:- It contains the complete UI and javascript code for Redux implementation.
* `CustomLibrary.js`:- It contains the custom library code that replicate the Redux basic structure.


