import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { login } from './Reducer';

const rootReducer = combineReducers({loginState: login});
const store = createStore(rootReducer, {loginState: {isRunning:false}});
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

