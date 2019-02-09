import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'

class App extends React {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render () {
    if (this.props.loading) {
      return <h3>Loading...</h3>
    }
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

const ConnectedApp = connect((state) => ({
  loading: state.loading
}))(App)

export default ConnectedApp
