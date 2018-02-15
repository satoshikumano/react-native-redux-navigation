import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider, connect } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { login } from './LoginReducers'
import { navReducer, initialState } from './NavigationReducers'
import thunk from 'redux-thunk'
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import RootStack from './RootStack'
import { addNavigationHelpers } from 'react-navigation'

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const addListener = createReduxBoundAddListener('root')

const rootReducer = combineReducers(
  {
    loginState: login,
    nav: navReducer
  }
)

class App extends React.Component {
  render () {
    return (
      <RootStack navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener
      })} />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App)

const store = createStore(
  rootReducer,
  {
    loginState: {isRunning: false},
    nav: initialState
  },
  applyMiddleware(thunk, navMiddleware)
)

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Login-Redux', () => Root)

export default Root
