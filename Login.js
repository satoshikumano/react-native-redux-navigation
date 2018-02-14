import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { loginStart, loginDone, loginError } from './ActionCreators';
import Home from './Home';

class Login extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const {isRunning, token, errorMessage, dispatch} = this.props;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          hidesWhenStopped={true}
          animating={isRunning}
        />
        <Text>Username</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
        />
        <Text>Password</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button
          onPress={ () => this.loginAsync(dispatch) }
          title="Login"
        />
        <Text>{errorMessage}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    isRunning: state.loginState.isRunning,
    token: state.loginState.token,
    errorMessage: state.loginState.errorMessage,
  }
}

export default connect(mapStateToProps)(Login);
