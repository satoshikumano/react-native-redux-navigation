import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Home from './Home';

const RootStack = StackNavigator(
  {
    LOGIN : {
      screen: Login
    },
    HOME : {
      screen: Home
    }
  },
  {
    initialRouteName: 'LOGIN'
  }
)

export default RootStack;
