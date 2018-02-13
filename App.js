import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { login } from './Reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({loginState: login});
const store = createStore(
  rootReducer,
  {loginState: {isRunning:false}},
  applyMiddleware(thunk);
);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

